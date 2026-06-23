import json
import os
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

    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute(
            "SELECT id, name, phone, email, message, source, page_url, messenger, "
            "created_at, email_sent FROM leads ORDER BY created_at DESC LIMIT 500"
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
            'created_at': created.isoformat() if isinstance(created, datetime) else str(created),
            'email_sent': bool(r['email_sent']),
        })

    return {
        'statusCode': 200,
        'headers': _cors_headers(),
        'body': json.dumps({'leads': leads, 'total': len(leads)}, ensure_ascii=False),
    }
