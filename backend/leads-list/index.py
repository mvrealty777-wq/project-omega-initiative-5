import json
import ssl
import os
import urllib.request
from datetime import datetime

import psycopg2
import psycopg2.extras


def _cors_headers() -> dict:
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }


# --- МАКС: сертификат НУЦ Минцифры ---
# Сервера МАКС подписаны российским корневым сертификатом (НУЦ Минцифры), которого нет
# в стандартном наборе Python. Скачиваем его один раз с официального сайта Госуслуг
# (по HTTPS с обычной проверкой) и доверяем ему только для запросов к МАКС.
_MAX_CA_URLS = (
    'https://gu-st.ru/content/lending/russian_trusted_root_ca_pem.crt',
    'https://gu-st.ru/content/lending/russian_trusted_sub_ca_pem.crt',
)
_MAX_CA_CACHE = '/tmp/russian_trusted_ca.pem'
_max_ctx = None


def _max_ssl_context():
    global _max_ctx
    if _max_ctx is not None:
        return _max_ctx
    ctx = ssl.create_default_context()
    pem = os.environ.get('MAX_CA_PEM', '')
    if not pem:
        try:
            with open(_MAX_CA_CACHE) as f:
                pem = f.read()
        except OSError:
            parts = []
            for url in _MAX_CA_URLS:
                try:
                    with urllib.request.urlopen(url, timeout=8) as r:
                        parts.append(r.read().decode('ascii', 'ignore'))
                except Exception as e:
                    print(f"MAX CA DOWNLOAD ERROR {url}: {type(e).__name__}: {e}")
            pem = '\n'.join(p for p in parts if 'BEGIN CERTIFICATE' in p)
            if pem:
                try:
                    with open(_MAX_CA_CACHE, 'w') as f:
                        f.write(pem)
                except OSError:
                    pass
    if pem:
        try:
            ctx.load_verify_locations(cadata=pem)
        except Exception as e:
            print(f"MAX CA LOAD ERROR: {type(e).__name__}: {e}")
    _max_ctx = ctx
    return ctx


def _max_chats() -> dict:
    '''Находит chat_id групп и user_id личных диалогов бота по последним событиям (GET /updates).
    С июня 2026 МАКС убрал GET /chats, поэтому: добавьте бота в группу и напишите в группе
    любое сообщение (или напишите боту в личку) — потом нажмите «Чаты МАКС» в админке.'''
    token = os.environ.get('MAX_BOT_TOKEN')
    if not token:
        return {'statusCode': 200, 'headers': _cors_headers(),
                'body': json.dumps({'error': 'Секрет MAX_BOT_TOKEN не задан'}, ensure_ascii=False)}
    try:
        req = urllib.request.Request('https://platform-api2.max.ru/updates?limit=100&timeout=0',
                                     headers={'Authorization': token})
        with urllib.request.urlopen(req, timeout=8, context=_max_ssl_context()) as r:
            upd = json.loads(r.read().decode())
    except Exception as e:
        return {'statusCode': 200, 'headers': _cors_headers(),
                'body': json.dumps({'error': f'{type(e).__name__}: {e}'}, ensure_ascii=False)}

    chats, users, seen_c, seen_u = [], [], set(), set()
    for u in upd.get('updates', []):
        msg = u.get('message') or {}
        rcp = msg.get('recipient') or {}
        chat = u.get('chat') or {}
        chat_id = u.get('chat_id') or rcp.get('chat_id') or chat.get('chat_id')
        chat_type = rcp.get('chat_type') or chat.get('type') or ('chat' if u.get('update_type') == 'bot_added' else '')
        if chat_id and chat_type != 'dialog' and chat_id not in seen_c:
            seen_c.add(chat_id)
            chats.append({'chat_id': chat_id, 'title': chat.get('title') or u.get('title') or '', 'type': chat_type})
        snd = msg.get('sender') or u.get('user') or {}
        uid = snd.get('user_id')
        if chat_type == 'dialog' and uid and uid not in seen_u and not snd.get('is_bot'):
            seen_u.add(uid)
            users.append({'user_id': uid, 'name': snd.get('name') or snd.get('first_name') or ''})
    return {'statusCode': 200, 'headers': _cors_headers(),
            'body': json.dumps({'chats': chats, 'users': users,
                                'types': sorted({x.get('update_type', '') for x in upd.get('updates', [])})},
                               ensure_ascii=False)}


def handler(event: dict, context) -> dict:
    '''Возвращает список заявок с сайта. Требует пароль администратора в заголовке X-Admin-Password.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': _cors_headers(), 'body': ''}

    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    headers = event.get('headers') or {}
    provided = headers.get('X-Admin-Password') or headers.get('x-admin-password') or ''
    admin_password = os.environ.get('ADMIN_PASSWORD', '')

    if not admin_password or provided != admin_password:
        return {
            'statusCode': 401,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Неверный пароль'}),
        }

    # Вспомогательный режим: список чатов МАКС-бота, чтобы узнать MAX_CHAT_ID
    params = event.get('queryStringParameters') or {}
    if params.get('max_chats'):
        return _max_chats()

    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute(
            "SELECT id, name, phone, email, message, source, page_url, messenger, "
            "comment, created_at, email_sent, utm_source, utm_campaign, utm_term, city FROM leads ORDER BY created_at DESC LIMIT 500"
        )
        rows = cur.fetchall()
        cur.close()
    finally:
        conn.close()

    leads = []
    for r in rows:
        created = r['created_at']
        leads.append({
            'id': r['id'],
            'name': r['name'] or '',
            'phone': r['phone'] or '',
            'email': r['email'] or '',
            'message': r['message'] or '',
            'source': r['source'] or '',
            'page_url': r['page_url'] or '',
            'messenger': r['messenger'] or '',
            'comment': r.get('comment') or '',
            'created_at': created.isoformat() if isinstance(created, datetime) else str(created),
            'email_sent': bool(r['email_sent']),
            'utm_source': r.get('utm_source') or '',
            'utm_campaign': r.get('utm_campaign') or '',
            'utm_term': r.get('utm_term') or '',
            'city': r.get('city') or '',
        })

    return {
        'statusCode': 200,
        'headers': _cors_headers(),
        'body': json.dumps({'leads': leads, 'total': len(leads)}, ensure_ascii=False),
    }