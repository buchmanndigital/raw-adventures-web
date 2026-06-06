"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";
import { useLang } from "@/lib/lang-context";

const LEGAL_LABELS = {
  imprint: { en: "Imprint", de: "Impressum", es: "Aviso legal", nl: "Colofon" },
  terms: { en: "Terms", de: "AGB", es: "Términos", nl: "Voorwaarden" },
  privacy: { en: "Privacy", de: "Datenschutz", es: "Privacidad", nl: "Privacy" },
} as const;

export function Footer() {
  const h = useHashLink();
  const { lang } = useLang();
  return (
    <footer>
      <a href="/" className="footer-logo">
        RAW<span>.</span>MOUNTAIN
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
        <a href="/impressum" id="footer-imprint">
          {LEGAL_LABELS.imprint[lang]}
        </a>
        <a href="/agb" id="footer-terms">
          {LEGAL_LABELS.terms[lang]}
        </a>
        <a href="/datenschutz" id="footer-privacy">
          {LEGAL_LABELS.privacy[lang]}
        </a>
      </div>
      <div className="footer-copy">
        &copy; 2026 RAW.MOUNTAIN &middot; Shar Mountains, North Macedonia
      </div>
    </footer>
  );
}
