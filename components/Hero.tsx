"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function Hero() {
  const h = useHashLink();
  return (
    <section id="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <Tx k="hero-tag" as="p" className="hero-tag" />
      <Tx k="hero-title" as="h1" className="hero-title" />
      <Tx k="hero-sub" as="p" className="hero-sub" />
      <div className="hero-price">
        <div>
          <Tx k="hero-from" as="div" className="hero-price-from" id="hero-from" />
          <div className="hero-price-val">€1.990</div>
        </div>
        <div className="hero-price-divider" />
        <Tx
          k="hero-price-note"
          as="div"
          className="hero-price-note"
          id="hero-price-note"
        />
      </div>
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
