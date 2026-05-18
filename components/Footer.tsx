"use client";

import { Tx } from "@/components/Tx";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        RAW<span>.</span>ADVENTURES
      </div>
      <div className="footer-links">
        <a href="#why" id="footer-why">
          <Tx k="footer-why" />
        </a>
        <a href="#terrain" id="footer-terrain">
          <Tx k="footer-terrain" />
        </a>
        <a href="#pricing" id="footer-pricing">
          <Tx k="footer-pricing" />
        </a>
        <a href="#season" id="footer-season">
          <Tx k="footer-season" />
        </a>
        <a href="#faq">FAQ</a>
        <a href="#about" id="footer-about">
          <Tx k="footer-about" />
        </a>
        <a href="#contact" id="footer-contact">
          <Tx k="footer-contact" />
        </a>
      </div>
      <div className="footer-copy">
        &copy; 2026 RAW.ADVENTURES &middot; Shar Mountains, North Macedonia
      </div>
    </footer>
  );
}
