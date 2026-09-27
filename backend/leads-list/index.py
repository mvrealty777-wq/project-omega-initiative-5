import json
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


def _max_chats() -> dict:
    token = os.environ.get('MAX_BOT_TOKEN')
    if not token:
        return {'statusCode': 200, 'headers': _cors_headers(),
                'body': json.dumps({'error': 'Секрет MAX_BOT_TOKEN не задан'}, ensure_ascii=False)}
    try:
        req = urllib.request.Request('https://platform-api2.max.ru/chats?count=50', headers={'Authorization': token})
        with urllib.request.urlopen(req, timeout=8) as r:
            data = json.loads(r.read().decode())
        chats = [{'chat_id': c.get('chat_id'), 'title': c.get('title') or '', 'type': c.get('type') or ''}
                 for c in data.get('chats', [])]
        return {'statusCode': 200, 'headers': _cors_headers(), 'body': json.dumps({'chats': chats}, ensure_ascii=False)}
    except Exception as e:
        return {'statusCode': 200, 'headers': _cors_headers(),
                'body': json.dumps({'error': f'{type(e).__name__}: {e}'}, ensure_ascii=False)}


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