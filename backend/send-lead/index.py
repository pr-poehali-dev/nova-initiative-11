"""Отправляет лид-заявку с сайта на email владельца."""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

RECIPIENT = "em.abramenko@gmail.com"

def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    context_text = (body.get("context") or "").strip()

    if not name:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Name is required"}),
        }

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New lead from site: {name}"
    msg["From"] = os.environ["SMTP_USER"]
    msg["To"] = RECIPIENT

    text = f"Name: {name}\n\nContext:\n{context_text or '—'}"
    html = f"""
    <div style="font-family: sans-serif; color: #111; max-width: 480px;">
      <h2 style="margin-bottom: 8px;">New lead from site</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Context:</strong><br>{context_text.replace(chr(10), '<br>') if context_text else '—'}</p>
    </div>
    """
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, RECIPIENT, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
