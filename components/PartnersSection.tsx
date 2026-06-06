"use client";

import { Tx } from "@/components/Tx";

type Partner = {
  href: string;
  title: string;
  width: number;
  height: number;
  viewBox: string;
  children: React.ReactNode;
};

const PARTNERS: Partner[] = [
  {
    href: "https://www.lib-tech.com",
    title: "Lib Tech",
    width: 110,
    height: 44,
    viewBox: "0 0 200 80",
    children: (
      <>
        <text x="0" y="55" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="52" fill="white" letterSpacing="-2">LIB</text>
        <text x="105" y="55" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="52" fill="white" letterSpacing="-2">TECH</text>
        <line x1="100" y1="5" x2="100" y2="65" stroke="white" strokeWidth="3" />
      </>
    ),
  },
  {
    href: "https://www.bentmetalbindings.com",
    title: "Bent Metal",
    width: 150,
    height: 44,
    viewBox: "0 0 280 80",
    children: (
      <>
        <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="30" fill="white" letterSpacing="1">BENT</text>
        <text x="0" y="72" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="30" fill="white" letterSpacing="1">METAL</text>
      </>
    ),
  },
  {
    href: "https://www.thirtytwo.com",
    title: "ThirtyTwo",
    width: 120,
    height: 44,
    viewBox: "0 0 220 80",
    children: (
      <>
        <text x="0" y="58" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="58" fill="white" letterSpacing="-2">32</text>
        <text x="75" y="38" fontFamily="Arial Narrow, Arial, sans-serif" fontWeight="700" fontSize="22" fill="white">THIRTY</text>
        <text x="75" y="62" fontFamily="Arial Narrow, Arial, sans-serif" fontWeight="700" fontSize="22" fill="white">TWO</text>
      </>
    ),
  },
  {
    href: "https://www.ridersheaven.de",
    title: "Riders Heaven",
    width: 160,
    height: 44,
    viewBox: "0 0 300 80",
    children: (
      <>
        <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="white" letterSpacing="0.5">RIDERS</text>
        <text x="0" y="70" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="white" letterSpacing="0.5">HEAVEN</text>
      </>
    ),
  },
  {
    href: "https://www.snowboarder.de",
    title: "Snowboarder MBM",
    width: 150,
    height: 44,
    viewBox: "0 0 380 80",
    children: (
      <>
        <text x="0" y="42" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" fill="white" letterSpacing="0.5">SNOWBOARDER</text>
        <text x="55" y="72" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" fill="white" letterSpacing="4">MBM</text>
      </>
    ),
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
          </a>
        ))}
      </div>
    </section>
  );
}
