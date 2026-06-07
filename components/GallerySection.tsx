"use client";

import { Tx } from "@/components/Tx";
import type { TranslationKey } from "@/lib/translations";

const PLACEHOLDER_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

type Item = {
  className?: string;
  src?: string;
  alt?: string;
  text?: string;
  size?: string;
};

export function GallerySection({
  id,
  labelKey,
  titleKey,
  items,
  background,
}: {
  id: string;
  labelKey: TranslationKey;
  titleKey: TranslationKey;
  items: Item[];
  background?: string;
}) {
  return (
    <section id={id} style={background ? { background } : undefined}>
      <Tx
        k={labelKey}
        as="p"
        className="gallery-label reveal"
        id={labelKey}
      />
      <Tx
        k={titleKey}
        as="h2"
        className="gallery-title reveal"
        id={titleKey}
      />
      <div className="gallery-grid reveal">
        {items.map((item, i) => (
          <div
            key={i}
            className={`gallery-item${item.className ? ` ${item.className}` : ""}`}
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt ?? ""}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="gallery-placeholder">
                {PLACEHOLDER_ICON}
                <span className="gallery-placeholder-text">{item.text}</span>
                <span className="gallery-placeholder-size">{item.size}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
