"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function Hero() {
  const h = useHashLink();
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <svg
        className="hero-mountain"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 400 L180 220 L280 300 L420 140 L560 260 L680 80 L800 200 L920 120 L1060 240 L1160 160 L1280 250 L1440 100 L1440 400 Z"
          fill="#6fa8c4"
        />
        <path
          d="M0 400 L120 280 L220 340 L360 200 L480 310 L580 180 L700 280 L820 160 L980 290 L1100 210 L1220 300 L1320 220 L1440 300 L1440 400 Z"
          fill="#fff"
          opacity="0.4"
        />
      </svg>
      <Tx k="hero-tag" as="p" className="hero-tag" />
      <Tx k="hero-title" as="h1" className="hero-title" />
      <Tx k="hero-sub" as="p" className="hero-sub" />
      <div className="hero-actions">
        <a href={h("pricing")} className="btn-primary" id="hero-btn1">
          <Tx k="hero-btn1" />
        </a>
        <a href={h("why")} className="btn-ghost" id="hero-btn2">
          <Tx k="hero-btn2" />
        </a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <Tx k="hero-scroll" as="span" />
      </div>
    </section>
  );
}
