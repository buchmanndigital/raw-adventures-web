"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function ContactSection() {
  const h = useHashLink();
  return (
    <section id="contact">
      <Tx k="con-label" as="p" className="section-label" id="con-label" />
      <Tx k="con-title" as="h2" className="section-title" id="con-title" />
      <Tx k="con-body" as="p" className="con-body" id="con-body" />
      <div className="contact-actions">
        <a href="mailto:info@raw-adventures.com" className="btn-dark" id="con-btn1">
          <Tx k="con-btn1" />
        </a>
        <a href={h("pricing")} className="btn-white" id="con-btn2">
          <Tx k="con-btn2" />
        </a>
      </div>
      <div className="contact-info">
        <p>
          <Tx k="con-or" as="span" id="con-or" />{" "}
          <a href="mailto:info@raw-adventures.com">info@raw-adventures.com</a>
        </p>
      </div>
    </section>
  );
}
