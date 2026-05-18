"use client";

import { Tx } from "@/components/Tx";
import { useLang } from "@/lib/lang-context";

export function FaqSection() {
  const { t } = useLang();
  return (
    <section id="faq">
      <Tx k="faq-label" as="p" className="section-label reveal" id="faq-label" />
      <h2 className="section-title reveal">FAQ</h2>
      <div
        className="faq-grid reveal"
        id="faq-grid"
        dangerouslySetInnerHTML={{ __html: t("faq-grid") }}
      />
    </section>
  );
}
