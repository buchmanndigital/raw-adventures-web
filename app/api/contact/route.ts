import { NextResponse } from "next/server";
import { getTransport, getRecipient, getSender } from "@/lib/mailer";

// nodemailer needs the Node.js runtime (not Edge); never cache this handler.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Field = { label: string; value: string };

type Payload = {
  subject?: string;
  replyTo?: string;
  fields?: Field[];
  message?: string;
  /** Honeypot: real users never see or fill this. */
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Silently accept bot submissions so they stop retrying.
  if (body.company && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const fields = Array.isArray(body.fields)
    ? body.fields.filter((f) => f && typeof f.value === "string" && f.value.trim())
    : [];
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (fields.length === 0 && !message) {
    return NextResponse.json({ ok: false, error: "empty" }, { status: 400 });
  }

  const replyTo =
    typeof body.replyTo === "string" && EMAIL_RE.test(body.replyTo.trim())
      ? body.replyTo.trim()
      : undefined;

  const subject = body.subject?.trim() || "Neue Anfrage – RAW.MOUNTAIN";

  const textLines = fields.map((f) => `${f.label}: ${f.value.trim()}`);
  if (message) textLines.push("", "Nachricht:", message);
  const text = textLines.join("\n");

  const htmlRows = fields
    .map(
      (f) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#888;white-space:nowrap;vertical-align:top">${escapeHtml(
          f.label,
        )}</td><td style="padding:4px 0;color:#111">${escapeHtml(f.value.trim())}</td></tr>`,
    )
    .join("");
  const htmlMessage = message
    ? `<p style="margin:16px 0 4px;color:#888">Nachricht:</p><p style="margin:0;color:#111;white-space:pre-wrap">${escapeHtml(
        message,
      )}</p>`
    : "";
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5"><h2 style="margin:0 0 16px;font-size:18px">${escapeHtml(
    subject,
  )}</h2><table style="border-collapse:collapse">${htmlRows}</table>${htmlMessage}</div>`;

  try {
    const transport = getTransport();
    await transport.sendMail({
      from: `RAW.MOUNTAIN <${getSender()}>`,
      to: getRecipient(),
      replyTo,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
