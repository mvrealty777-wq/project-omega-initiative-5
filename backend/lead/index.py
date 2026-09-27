import json
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


def _send_max(text: str) -> None:
    '''Мессенджер МАКС (dev.max.ru). Секреты MAX_BOT_TOKEN и MAX_CHAT_ID (групповой чат)
    или MAX_USER_ID (личный диалог с ботом). Нет секретов — пропускаем.'''
    token = os.environ.get('MAX_BOT_TOKEN')
    chat_id = os.environ.get('MAX_CHAT_ID')
    user_id = os.environ.get('MAX_USER_ID')
    if not token or not (chat_id or user_id):
        return
    target = f"chat_id={chat_id}" if chat_id else f"user_id={user_id}"
    req = urllib.request.Request(
        f"https://platform-api2.max.ru/messages?{target}",
        data=json.dumps({'text': text[:4000]}).encode(),
        headers={'Authorization': token, 'Content-Type': 'application/json'},
        method='POST',
    )
    try:
        urllib.request.urlopen(req, timeout=5)
    except Exception as e:
        print(f"MAX ERROR: {type(e).__name__}: {e}")


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
    if data.get('event') in CLICK_NAMES:
        _notify(_click_text(data))
        return {'statusCode': 200, 'headers': _cors_headers(), 'body': json.dumps({'success': True})}

    if not data.get('phone') and not data.get('email'):
        return {
            'statusCode': 400,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Укажите телефон или e-mail'}),
        }

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