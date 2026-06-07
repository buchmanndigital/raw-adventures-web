"use client";

import { useState } from "react";
import { Tx } from "@/components/Tx";
import { useLang } from "@/lib/lang-context";

export function ContactSection() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const city = (data.get("city") as string)?.trim();
    const guests = data.get("guests") as string;
    const date = (data.get("date") as string)?.trim();
    const message = ((data.get("message") as string) ?? "").trim();
    const company = (data.get("company") as string) ?? ""; // honeypot

    if (!name || !email || !city || !guests || !date) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Booking Enquiry – RAW.MOUNTAIN",
          replyTo: email,
          company,
          fields: [
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "City/Country", value: city },
            { label: "Travellers", value: guests },
            { label: "Travel date", value: date },
          ],
          message,
        }),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <Tx k="con-label" as="p" className="section-label" id="con-label" />
      <Tx k="con-title" as="h2" className="section-title" id="con-title" />
      <Tx k="con-body" as="p" className="con-body" id="con-body" />

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <Tx k="form-name-label" as="label" className="form-label" id="form-name-label" />
            <input className="form-input" type="text" name="name" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="form-group">
            <Tx k="form-email-label" as="label" className="form-label" id="form-email-label" />
            <input className="form-input" type="email" name="email" placeholder="your@email.com" autoComplete="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <Tx k="form-city-label" as="label" className="form-label" id="form-city-label" />
            <input className="form-input" type="text" name="city" placeholder="Amsterdam, NL" autoComplete="address-level2" required />
          </div>
          <div className="form-group">
            <Tx k="form-guests-label" as="label" className="form-label" id="form-guests-label" />
            <select className="form-select" name="guests" defaultValue="" required>
              <option value="" disabled>
                {t("form-guests-placeholder")}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7-10">7 – 10</option>
              <option value="11-14">11 – 14</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full">
            <Tx k="form-date-label" as="label" className="form-label" id="form-date-label" />
            <input className="form-input" type="text" name="date" placeholder="e.g. January 2027, week 3 or flexible" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full">
            <Tx k="form-msg-label" as="label" className="form-label" id="form-msg-label" />
            <textarea className="form-textarea form-input" name="message" placeholder="Questions, ski or snowboard, experience level..." />
          </div>
        </div>
        {/* Honeypot — hidden from users, catches bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
        />
        <div className="form-submit">
          <button
            className="form-btn"
            type="submit"
            id="form-submit-btn"
            disabled={status === "sending"}
          >
            <Tx k="form-submit-btn" />
          </button>
          <Tx k="form-note-text" as="p" className="form-note" id="form-note-text" />
        </div>
        {status === "success" && (
          <div className="form-success" style={{ display: "block" }}>
            <Tx k="form-success-msg" as="p" id="form-success-msg" />
          </div>
        )}
        {status === "error" && (
          <div className="form-error" style={{ display: "block" }}>
            <Tx k="form-error-msg" as="span" id="form-error-msg" />
          </div>
        )}
      </form>

      <div className="contact-info" style={{ marginTop: "2rem" }}>
        <p>
          <Tx k="con-or" as="span" id="con-or" />{" "}
          <a href="mailto:booking@raw-mountain.com">booking@raw-mountain.com</a>
        </p>
      </div>
    </section>
  );
}
