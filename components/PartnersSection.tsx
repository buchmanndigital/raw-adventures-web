"use client";

import { Tx } from "@/components/Tx";

type Partner = {
  href: string;
  title: string;
  width: number;
  height: number;
  /** Raster logo (white on transparent). When set, rendered as an <img>. */
  src?: string;
  /** Inline SVG fallback for text-based placeholder logos. */
  viewBox?: string;
  children?: React.ReactNode;
};

const PARTNERS: Partner[] = [
  {
    href: "https://www.lib-tech.com",
    title: "Lib Tech",
    src: "/partners/lib-tech.webp",
    width: 130,
    height: 38,
  },
  {
    href: "https://www.bentmetal.com",
    title: "Bent Metal",
    src: "/partners/bent-metal.webp",
    width: 150,
    height: 34,
  },
  {
    href: "https://www.thirtytwo.com",
    title: "ThirtyTwo",
    src: "/partners/thirtytwo.webp",
    width: 119,
    height: 36,
  },
  {
    href: "https://www.ridersheaven.com",
    title: "Riders Heaven",
    src: "/partners/riders-heaven.webp",
    width: 198,
    height: 45,
  },
  {
    href: "https://www.snowboardermbm.de",
    title: "Snowboarder MBM",
    src: "/partners/snowboarder-mbm.webp",
    width: 160,
    height: 29,
  },
];

export function PartnersSection() {
  return (
    <section id="partners">
      <Tx
        k="partners-label"
        as="p"
        className="partners-label"
        id="partners-label"
      />
      <div className="partners-row">
        {PARTNERS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            title={p.title}
            className="partner-logo"
          >
            {p.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.src}
                width={p.width}
                height={p.height}
                alt={p.title}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <svg
                width={p.width}
                height={p.height}
                viewBox={p.viewBox}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={p.title}
              >
                {p.children}
              </svg>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
