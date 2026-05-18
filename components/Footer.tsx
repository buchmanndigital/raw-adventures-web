"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function Footer() {
  const h = useHashLink();
  return (
    <footer>
      <a href="/" className="footer-logo">
        RAW<span>.</span>ADVENTURES
      </a>
      <div className="footer-links">
        <a href={h("why")} id="footer-why">
          <Tx k="footer-why" />
        </a>
        <a href={h("terrain")} id="footer-terrain">
          <Tx k="footer-terrain" />
        </a>
        <a href={h("pricing")} id="footer-pricing">
          <Tx k="footer-pricing" />
        </a>
        <a href={h("season")} id="footer-season">
          <Tx k="footer-season" />
        </a>
        <a href={h("faq")}>FAQ</a>
        <a href={h("about")} id="footer-about">
          <Tx k="footer-about" />
        </a>
        <a href={h("contact")} id="footer-contact">
          <Tx k="footer-contact" />
        </a>
      </div>
      <div className="footer-copy">
        &copy; 2026 RAW.ADVENTURES &middot; Shar Mountains, North Macedonia
      </div>
    </footer>
  );
}
