import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from datetime import datetime, timezone, timedelta

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


def _send_email(data: dict) -> bool:
    '''Отправляет заявку на почту через SMTP. Возвращает True при успехе.'''
    host = os.environ.get('SMTP_HOST') or 'smtp.yandex.ru'
    port = int(os.environ.get('SMTP_PORT', '465'))
    user = os.environ.get('SMTP_USER')
    password = os.environ.get('SMTP_PASSWORD')
    to_addr = os.environ.get('LEAD_EMAIL_TO', 'info@vam-vdom.ru')

    if not (host and user and password):
        print(f"SMTP not configured: host={bool(host)} user={bool(user)} password={bool(password)}")
        return False

    msk = timezone(timedelta(hours=3))
    now = datetime.now(msk).strftime('%d.%m.%Y %H:%M')

    lines = [
        'Новая заявка с сайта GeniusSPA',
        '',
        f"Имя: {data.get('name') or '—'}",
        f"Телефон: {data.get('phone') or '—'}",
        f"E-mail: {data.get('email') or '—'}",
    ]
    if data.get('messenger'):
        lines.append(f"Связаться через: {data.get('messenger')}")
    if data.get('message'):
        lines.append(f"Сообщение: {data.get('message')}")
    if data.get('comment'):
        lines.append('')
        lines.append(f"Детали заявки:\n{data.get('comment')}")
    lines += [
        '',
        f"Форма: {data.get('source') or '—'}",
        f"Страница: {data.get('page_url') or '—'}",
        f"Время (МСК): {now}",
    ]
    body = '\n'.join(lines)

    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = Header(f"Заявка с сайта — {data.get('name') or 'без имени'}", 'utf-8')
    msg['From'] = user
    msg['To'] = to_addr
    if data.get('email'):
        msg['Reply-To'] = data.get('email')

    if port == 465:
        server = smtplib.SMTP_SSL(host, port, timeout=20)
    else:
        server = smtplib.SMTP(host, port, timeout=20)
        server.starttls()
    try:
        server.login(user, password)
        server.sendmail(user, [to_addr], msg.as_string())
    finally:
        server.quit()
    return True


def handler(event: dict, context) -> dict:
    '''Принимает заявки со всех форм сайта, отправляет на почту и сохраняет в БД.'''
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

    # 1) СНАЧАЛА сохраняем заявку в БД — это главная гарантия, что заявка не потеряется.
    saved = False
    lead_id = None
    try:
        lead_id = _save_lead(data, False)
        saved = True
    except Exception as e:
        print(f"DB SAVE ERROR: {type(e).__name__}: {e}")

    # 2) Пытаемся отправить письмо (не критично для сохранения).
    email_sent = False
    try:
        email_sent = _send_email(data)
    except Exception as e:
        print(f"SMTP ERROR: {type(e).__name__}: {e}")
        email_sent = False

    # 3) Если письмо ушло — отмечаем это в уже сохранённой строке.
    if saved and email_sent and lead_id is not None:
        try:
            dsn = os.environ.get('DATABASE_URL')
            conn = psycopg2.connect(dsn)
            try:
                cur = conn.cursor()
                cur.execute("UPDATE leads SET email_sent = TRUE WHERE id = %s", (lead_id,))
                conn.commit()
                cur.close()
            finally:
                conn.close()
        except Exception as e:
            print(f"DB UPDATE ERROR: {type(e).__name__}: {e}")

    # Заявка принята, если она сохранена в БД ИЛИ ушла на почту.
    accepted = saved or email_sent
    status = 200 if accepted else 500
    return {
        'statusCode': status,
        'headers': _cors_headers(),
        'body': json.dumps({'success': accepted, 'saved': saved, 'email_sent': email_sent}),
    }