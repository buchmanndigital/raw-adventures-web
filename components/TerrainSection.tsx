"use client";

import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

const ROWS: { icon: string; h: TranslationKey; p: TranslationKey }[] = [
  { icon: "/icons/terrain-steep-bowls.webp", h: "t1h", p: "t1p" },
  { icon: "/icons/terrain-tree-runs.webp", h: "t2h", p: "t2p" },
  { icon: "/icons/terrain-couloirs.webp", h: "t3h", p: "t3p" },
  { icon: "/icons/terrain-natural-features.webp", h: "t4h", p: "t4p" },
  { icon: "/icons/terrain-powder-days.webp", h: "t5h", p: "t5p" },
  { icon: "/icons/terrain-snowcat.webp", h: "t6h", p: "t6p" },
];

export function TerrainSection() {
  return (
    <section id="terrain">
      <Tx k="terrain-label" as="p" className="section-label reveal" />
      <Tx k="terrain-title" as="h2" className="section-title reveal" />
      <div className="terrain-grid reveal">
        {ROWS.map(({ icon, h, p }) => (
          <div key={h} className="terrain-card">
            <img
              src={icon}
              alt=""
              className="terrain-icon"
              aria-hidden="true"
            />
            <Tx k={h} as="h3" id={h} />
            <Tx k={p} as="p" id={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
