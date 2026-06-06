"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

type Item = {
  k: TranslationKey;
  time: string;
  variant?: "highlight" | "optional";
};

type Day = {
  numKey: TranslationKey;
  titleKey: TranslationKey;
  riding?: boolean;
  items: Item[];
};

const DAYS: Day[] = [
  {
    numKey: "itin-d1n",
    titleKey: "itin-d1t",
    items: [
      { k: "itin-d1i1", time: "—" },
      { k: "itin-d1i2", time: "—" },
      { k: "itin-d1i3", time: "20:00" },
      { k: "itin-d1i4", time: "—", variant: "optional" },
      { k: "itin-d1i5", time: "—", variant: "optional" },
    ],
  },
  {
    numKey: "itin-d2n",
    titleKey: "itin-d2t",
    riding: true,
    items: [
      { k: "itin-d2i1", time: "07:00" },
      { k: "itin-d2i2", time: "08:30", variant: "highlight" },
      { k: "itin-d2i3", time: "16:30", variant: "highlight" },
      { k: "itin-d2i4", time: "16:30" },
      { k: "itin-d2i5", time: "20:00" },
    ],
  },
  {
    numKey: "itin-d3n",
    titleKey: "itin-d3t",
    items: [
      { k: "itin-d3i1", time: "07:00" },
      { k: "itin-d3i2", time: "08:30", variant: "highlight" },
      { k: "itin-d3i3", time: "15:30", variant: "highlight" },
      { k: "itin-d3i4", time: "17:30" },
      { k: "itin-d3i5", time: "19:30" },
      { k: "itin-d3i6", time: "20:00" },
    ],
  },
  {
    numKey: "itin-d4n",
    titleKey: "itin-d4t",
    items: [
      { k: "itin-d4i1", time: "07:00" },
      { k: "itin-d4i2", time: "—" },
      { k: "itin-d4i3", time: "—" },
    ],
  },
];

export function ItinerarySection() {
  const h = useHashLink();
  return (
    <section id="itinerary">
      <Tx k="itin-label" as="p" className="section-label reveal" id="itin-label" />
      <Tx k="itin-title" as="h2" className="section-title reveal" id="itin-title" />
      <Tx k="itin-sub" as="p" className="section-sub reveal" id="itin-sub" />

      <div className="itin-grid reveal">
        {DAYS.map((day) => (
          <div
            key={day.numKey}
            className={`itin-day${day.riding ? " itin-day-riding" : ""}`}
          >
            <div className="itin-day-header">
              <Tx
                k={day.numKey}
                as="div"
                className="itin-day-num"
                id={day.numKey}
              />
              <Tx
                k={day.titleKey}
                as="div"
                className="itin-day-title"
                id={day.titleKey}
              />
            </div>
            <div className="itin-items">
              {day.items.map((item) => (
                <div
                  key={item.k}
                  className={`itin-item${item.variant ? ` itin-${item.variant}` : ""}`}
                >
                  <div className="itin-time">{item.time}</div>
                  <Tx k={item.k} as="div" className="itin-desc" id={item.k} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="itin-callout">
        <Tx
          k="itin-callout-text"
          as="p"
          className="itin-callout-text"
          id="itin-callout-text"
        />
        <a href={h("contact")} className="itin-callout-btn" id="itin-callout-btn">
          <Tx k="itin-callout-btn" />
        </a>
      </div>
    </section>
  );
}
