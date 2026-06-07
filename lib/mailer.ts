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
