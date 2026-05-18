"use client";

import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

const KEYS = ["m1", "m2", "m3", "m4", "m5", "m6"] as const;
const SNOW_ON = [3, 5, 5, 4, 4, 5];

export function SeasonSection() {
  return (
    <section id="season">
      <Tx k="season-label" as="p" className="section-label reveal" />
      <Tx k="season-title" as="h2" className="section-title reveal" />
      <div className="season-grid reveal">
        {KEYS.map((monthK, idx) => {
          const on = SNOW_ON[idx];
          const descK = `${monthK}d` as TranslationKey;
          const isCustom = idx === 5;
          return (
            <div
              key={monthK}
              className="month-card"
              style={
                isCustom
                  ? {
                      background: "rgba(212,85,10,0.06)",
                      border: "1px solid rgba(212,85,10,0.2)",
                    }
                  : undefined
              }
            >
              <Tx
                k={monthK}
                as="h3"
                style={isCustom ? { color: "var(--accent)" } : undefined}
                id={monthK}
              />
              <div className="month-snow">
                {Array.from({ length: 5 }, (_, j) => (
                  <div
                    key={j}
                    className={`snow-dot${j < on ? " on" : ""}`}
                  />
                ))}
              </div>
              <Tx k={descK} as="p" className="month-desc" id={descK} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
