import nodemailer, { type Transporter } from "nodemailer";

/**
 * Singleton SMTP transport for the Strato mailbox.
 *
 * All credentials come from environment variables — never hardcode them:
 *   SMTP_HOST  e.g. smtp.strato.de
 *   SMTP_PORT  465 (implicit TLS) or 587 (STARTTLS)
 *   SMTP_USER  e.g. booking@raw-mountain.com
 *   SMTP_PASS  mailbox password (set in .env.local locally, in Vercel for prod)
 */
let cached: Transporter | null = null;

export function getTransport(): Transporter {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP configuration missing — set SMTP_HOST, SMTP_USER and SMTP_PASS.",
    );
  }

  cached = nodemailer.createTransport({
    host,
    port,
    // Port 465 uses implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });

  return cached;
}

/** Mailbox that receives the enquiries (defaults to the authenticated user). */
export function getRecipient(): string {
  return process.env.CONTACT_TO ?? process.env.SMTP_USER ?? "";
}

/** Verified sender — Strato requires this to match the authenticated mailbox. */
export function getSender(): string {
  return process.env.CONTACT_FROM ?? process.env.SMTP_USER ?? "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Branded, email-client-safe HTML for an enquiry.
 * Table-based with inline styles so it renders in Outlook/Gmail/Apple Mail.
 */
export function renderEnquiryEmail(
  subject: string,
  fields: { label: string; value: string }[],
  message: string,
): string {
  const rows = fields
    .map(
      (f, i) => `
      <tr>
        <td style="padding:14px 24px;border-top:${
          i === 0 ? "none" : "1px solid #ece7dd"
        };font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#9a9384;white-space:nowrap;vertical-align:top;width:38%">${escapeHtml(
          f.label,
        )}</td>
        <td style="padding:14px 24px 14px 0;border-top:${
          i === 0 ? "none" : "1px solid #ece7dd"
        };font:400 15px/1.5 Arial,Helvetica,sans-serif;color:#1a1a1a;vertical-align:top">${escapeHtml(
          f.value.trim(),
        )}</td>
      </tr>`,
    )
    .join("");

  const messageBlock = message
    ? `
      <tr><td colspan="2" style="padding:8px 24px 24px">
        <div style="border-left:3px solid #d4550a;background:#faf7f1;padding:14px 18px">
          <p style="margin:0 0 6px;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#9a9384">Nachricht</p>
          <p style="margin:0;font:400 15px/1.6 Arial,Helvetica,sans-serif;color:#1a1a1a;white-space:pre-wrap">${escapeHtml(
            message,
          )}</p>
        </div>
      </td></tr>`
    : "";

  return `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#efeae0">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#efeae0;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08)">
        <!-- header -->
        <tr><td style="background:#0a0a0a;padding:26px 24px 22px">
          <p style="margin:0;font:700 22px/1 Arial,Helvetica,sans-serif;letter-spacing:.04em;color:#f5f0e8">RAW<span style="color:#d4550a">.</span>MOUNTAIN</p>
          <p style="margin:10px 0 0;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#d4550a">${escapeHtml(
            subject,
          )}</p>
        </td></tr>
        <tr><td style="height:3px;background:linear-gradient(90deg,#d4550a,#6fa8c4);font-size:0;line-height:0">&nbsp;</td></tr>
        <!-- fields -->
        <tr><td style="padding:10px 0 0">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}${messageBlock}</table>
        </td></tr>
        <!-- footer -->
        <tr><td style="padding:18px 24px 22px;border-top:1px solid #ece7dd">
          <p style="margin:0;font:400 12px/1.5 Arial,Helvetica,sans-serif;color:#9a9384">Gesendet über das Anfrageformular auf <a href="https://raw-mountain.com" style="color:#9a9384">raw-mountain.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
