"use client";

import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

const STEPS: { n: string; h: TranslationKey; p: TranslationKey }[] = [
  { n: "01", h: "s1h", p: "s1p" },
  { n: "02", h: "s2h", p: "s2p" },
  { n: "03", h: "s3h", p: "s3p" },
  { n: "04", h: "s4h", p: "s4p" },
  { n: "05", h: "s5h", p: "s5p" },
];

export function HowSection() {
  return (
    <section id="how">
      <Tx k="how-label" as="p" className="section-label reveal" />
      <Tx k="how-title" as="h2" className="section-title reveal" />
      <div className="steps">
        {STEPS.map(({ n, h, p }) => (
          <div key={h} className="step reveal">
            <div className="step-num">{n}</div>
            <Tx k={h} as="h4" id={h} />
            <Tx k={p} as="p" id={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
