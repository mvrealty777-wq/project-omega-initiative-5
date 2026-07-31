import json
import os

import psycopg2


def _cors_headers() -> dict:
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }


def _save_lead(data: dict, email_sent: bool) -> int:
    '''Сохраняет заявку в БД. Возвращает id новой строки. Бросает исключение при ошибке.'''
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        raise RuntimeError('DATABASE_URL is not set')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO leads (name, phone, email, message, source, page_url, messenger, comment, email_sent) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
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

    if not data.get('phone') and not data.get('email'):
        return {
            'statusCode': 400,
            'headers': _cors_headers(),
            'body': json.dumps({'error': 'Укажите телефон или e-mail'}),
        }

    # Сохраняем заявку в БД — единственный и надёжный канал получения заявок.
    saved = False
    try:
        _save_lead(data, False)
        saved = True
    except Exception as e:
        print(f"DB SAVE ERROR: {type(e).__name__}: {e}")

    status = 200 if saved else 500
    return {
        'statusCode': status,
        'headers': _cors_headers(),
        'body': json.dumps({'success': saved, 'saved': saved}),
    }