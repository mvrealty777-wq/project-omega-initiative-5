import json
import ssl
import os
import urllib.parse
import urllib.request

import psycopg2


def _cors_headers() -> dict:
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }


def _s(data: dict, key: str, limit: int) -> str:
    return str(data.get(key) or '')[:limit]


CITY_NAMES = {'msk': 'Москва', 'spb': 'Санкт-Петербург', 'sochi': 'Сочи'}


def _lead_text(data: dict, lead_id) -> str:
    city = CITY_NAMES.get(_s(data, 'city', 50).lower(), _s(data, 'city', 50))
    lines = [
        f"🔥 Новая заявка #{lead_id}",
        f"Имя: {_s(data, 'name', 255) or '—'}",
        f"Телефон: {_s(data, 'phone', 100) or '—'}",
    ]
    if data.get('email'):
        lines.append(f"E-mail: {_s(data, 'email', 255)}")
    if data.get('messenger'):
        lines.append(f"Связь: {_s(data, 'messenger', 50)}")
    lines.append(f"Форма: {_s(data, 'source', 255)}")
    if city:
        lines.append(f"Город: {city}")
    if data.get('utm_source') or data.get('utm_campaign'):
        lines.append(f"Реклама: {_s(data, 'utm_source', 200)} / {_s(data, 'utm_campaign', 200)} / {_s(data, 'utm_term', 200)}")
    if data.get('comment'):
        lines.append(f"Ответы: {_s(data, 'comment', 1500)}")
    if data.get('page_url'):
        lines.append(f"Страница: {_s(data, 'page_url', 500)}")
    return '\n'.join(lines)


CLICK_NAMES = {
    'phone_click': '📞 Нажали «Позвонить»',
    'messenger_whatsapp_click': '💬 Перешли в WhatsApp',
    'messenger_telegram_click': '💬 Перешли в Telegram',
    'messenger_max_click': '💬 Перешли в МАКС',
}


def _click_text(data: dict) -> str:
    city = CITY_NAMES.get(_s(data, 'city', 50).lower(), _s(data, 'city', 50))
    lines = [f"{CLICK_NAMES.get(_s(data, 'event', 50), 'Клик')} на сайте — ждите звонка или сообщения"]
    if city:
        lines.append(f"Город: {city}")
    if data.get('utm_source') or data.get('utm_campaign'):
        lines.append(f"Реклама: {_s(data, 'utm_source', 200)} / {_s(data, 'utm_campaign', 200)} / {_s(data, 'utm_term', 200)}")
    if data.get('page_url'):
        lines.append(f"Страница: {_s(data, 'page_url', 500)}")
    return '\n'.join(lines)


def _send_telegram(text: str) -> None:
    '''Секреты TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID. Нет секретов — пропускаем.'''
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        return
    body = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()
    try:
        urllib.request.urlopen(
            urllib.request.Request(f"https://api.telegram.org/bot{token}/sendMessage", data=body),
            timeout=5,
        )
    except Exception as e:
        print(f"TELEGRAM ERROR: {type(e).__name__}: {e}")


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


def _send_max(text: str) -> None:
    '''Мессенджер МАКС (dev.max.ru). Секрет MAX_BOT_TOKEN и получатели:
    MAX_CHAT_ID — групповой чат и/или MAX_USER_ID — личные диалоги (можно несколько через запятую).
    Нет секретов — пропускаем.'''
    token = os.environ.get('MAX_BOT_TOKEN')
    if not token:
        return
    targets = [f"chat_id={c.strip()}" for c in (os.environ.get('MAX_CHAT_ID') or '').split(',') if c.strip()]
    targets += [f"user_id={u.strip()}" for u in (os.environ.get('MAX_USER_ID') or '').split(',') if u.strip()]
    for target in targets:
        req = urllib.request.Request(
            f"https://platform-api2.max.ru/messages?{target}",
            data=json.dumps({'text': text[:4000]}).encode(),
            headers={'Authorization': token, 'Content-Type': 'application/json'},
            method='POST',
        )
        try:
            urllib.request.urlopen(req, timeout=5, context=_max_ssl_context())
        except Exception as e:
            print(f"MAX ERROR ({target}): {type(e).__name__}: {e}")


def _notify(text: str) -> None:
    _send_max(text)
    _send_telegram(text)


def _save_lead(data: dict, email_sent: bool) -> int:
    '''Сохраняет заявку в БД. Возвращает id новой строки. Бросает исключение при ошибке.'''
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        raise RuntimeError('DATABASE_URL is not set')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO leads (name, phone, email, message, source, page_url, messenger, comment, email_sent, "
            "utm_source, utm_medium, utm_campaign, utm_content, utm_term, yclid, city, landing_url) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
            (
                (data.get('name') or '')[:255],
                (data.get('phone') or '')[:100],
                (data.get('email') or '')[:255],
                data.get('message') or '',
                (data.get('source') or '')[:255],
                data.get('page_url') or '',
                (data.get('messenger') or '')[:50],
                data.get('comment') or '',
                email_sent,
                _s(data, 'utm_source', 200),
                _s(data, 'utm_medium', 200),
                _s(data, 'utm_campaign', 200),
                _s(data, 'utm_content', 200),
                _s(data, 'utm_term', 200),
                _s(data, 'yclid', 200),
                _s(data, 'city', 50),
                _s(data, 'landing_url', 1000),
            ),
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        return new_id
    finally:
        conn.close()


# ---------- Антиспам ----------
import re
import time

_SIG_SALT = 'gs-lead-2026'
_ip_hits: dict = {}
_URL_RE = re.compile(r'(https?://|www\.|\.(ru|com|net|org|xyz|top|info)\b|<a |\[url)', re.I)


def _fnv(s: str) -> str:
    h = 0x811c9dc5
    for ch in s:
        h ^= ord(ch) if ord(ch) < 0x10000 else ord(ch)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, 'x')


def _client_ip(event: dict) -> str:
    hdr = {k.lower(): v for k, v in (event.get('headers') or {}).items()}
    ip = (hdr.get('x-forwarded-for') or hdr.get('x-real-ip') or '').split(',')[0].strip()
    return ip or ((event.get('requestContext') or {}).get('identity') or {}).get('sourceIp', '') or 'unknown'


def _rate_limited(ip: str, limit: int, window: int) -> bool:
    now = time.time()
    hits = [t for t in _ip_hits.get(ip, []) if now - t < window]
    hits.append(now)
    _ip_hits[ip] = hits
    return len(hits) > limit


def _valid_ru_phone(phone: str) -> bool:
    d = re.sub(r'\D', '', phone or '')
    if len(d) == 11 and d[0] in '78':
        d = d[1:]
    if len(d) != 10 or d[0] not in '3489':
        return False
    if len(set(d)) <= 2 or d in ('9000000000', '9999999999', '9123456789'):
        return False
    return True


def _spam_reason(data: dict, is_click: bool) -> str:
    """Пустая строка — заявка похожа на человека; иначе причина отказа."""
    try:
        ts = int(data.get('_ts') or 0)
        lt = int(data.get('_lt') or 0)
    except (TypeError, ValueError):
        return 'bad_ts'
    if not ts or not lt:
        return 'no_token'
    contact = '' if is_click else (data.get('phone') or data.get('email') or '')
    digits = re.sub(r'\D', '', str(contact))
    if str(data.get('_sig') or '') != _fnv(f"{ts}|{digits}|{_SIG_SALT}"):
        return 'bad_sig'
    now_ms = int(time.time() * 1000)
    if abs(now_ms - ts) > 15 * 60 * 1000:
        return 'stale'
    if ts - lt < 3000:
        return 'too_fast'
    if not data.get('_hi'):
        return 'no_human'
    if is_click:
        return ''
    if data.get('phone') and not _valid_ru_phone(str(data.get('phone'))):
        return 'bad_phone'
    blob = ' '.join(str(data.get(k) or '') for k in ('name', 'message', 'comment'))
    if _URL_RE.search(blob):
        return 'link'
    if re.search(r'[A-Za-z]{25,}', blob):
        return 'gibberish'
    return ''


def _recent_duplicate(phone: str) -> bool:
    d = re.sub(r'\D', '', phone or '')[-10:]
    if not d:
        return False
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT COUNT(*) FROM leads WHERE regexp_replace(phone, '\\D', '', 'g') LIKE %s "
            "AND created_at > NOW() - INTERVAL '30 minutes'",
            ('%' + d,),
        )
        return (cur.fetchone() or [0])[0] > 0
    finally:
        conn.close()


def _ok() -> dict:
    # Боту отвечаем «успешно», чтобы он не подбирал обход
    return {'statusCode': 200, 'headers': _cors_headers(), 'body': json.dumps({'success': True})}


def handler(event: dict, context) -> dict:
    '''Принимает заявки со всех форм сайта и сохраняет их в БД (просмотр в /admin/leads).'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': _cors_headers(), 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        data = json.loads(event.get('body') or '{}')
    except (ValueError, TypeError):
        return {
            'statusCode': 400,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    # Клик по телефону / мессенджеру — только уведомление, в БД не пишем
    ip = _client_ip(event)
    is_click = data.get('event') in CLICK_NAMES
    reason = _spam_reason(data, is_click)
    if not reason and _rate_limited(ip, 5 if not is_click else 10, 600):
        reason = 'rate_limit'
    if reason:
        print(f"SPAM blocked: {reason} ip={ip} phone={str(data.get('phone') or '')[:20]} src={str(data.get('source') or data.get('event') or '')[:60]}")
        return _ok()

    if is_click:
        _notify(_click_text(data))
        return {'statusCode': 200, 'headers': _cors_headers(), 'body': json.dumps({'success': True})}

    if not data.get('phone') and not data.get('email'):
        return {
            'statusCode': 400,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Укажите телефон или e-mail'}),
        }

    try:
        if data.get('phone') and _recent_duplicate(str(data.get('phone'))):
            print(f"DUPLICATE skipped: phone={str(data.get('phone'))[:20]}")
            return _ok()
    except Exception as e:
        print(f"DUP CHECK ERROR: {type(e).__name__}: {e}")

    # Сохраняем заявку в БД — единственный и надёжный канал получения заявок.
    saved = False
    lead_id = None
    try:
        lead_id = _save_lead(data, False)
        saved = True
    except Exception as e:
        print(f"DB SAVE ERROR: {type(e).__name__}: {e}")

    # Уведомление шлём даже если БД недоступна — чтобы заявка не потерялась
    _notify(_lead_text(data, lead_id if lead_id is not None else '—'))

    status = 200 if saved else 500
    return {
        'statusCode': status,
        'headers': _cors_headers(),
        'body': json.dumps({'success': saved, 'saved': saved}),
    }