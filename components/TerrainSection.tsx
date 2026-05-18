"use client";

import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

const ROWS: { icon: string; h: TranslationKey; p: TranslationKey }[] = [
  { icon: "⛰️", h: "t1h", p: "t1p" },
  { icon: "🌲", h: "t2h", p: "t2p" },
  { icon: "🏔️", h: "t3h", p: "t3p" },
  { icon: "🌊", h: "t4h", p: "t4p" },
  { icon: "⚡", h: "t5h", p: "t5p" },
  { icon: "🐱", h: "t6h", p: "t6p" },
];

export function TerrainSection() {
  return (
    <section id="terrain">
      <Tx k="terrain-label" as="p" className="section-label reveal" />
      <Tx k="terrain-title" as="h2" className="section-title reveal" />
      <div className="terrain-grid reveal">
        {ROWS.map(({ icon, h, p }) => (
          <div key={h} className="terrain-card">
            <span className="terrain-icon">{icon}</span>
            <Tx k={h} as="h3" id={h} />
            <Tx k={p} as="p" id={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
