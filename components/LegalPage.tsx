"use client";

import { LangBar } from "@/components/LangBar";
import { useLang } from "@/lib/lang-context";
import type { Lang } from "@/lib/translations";
import { AGB_HTML, IMPRESSUM_HTML } from "@/lib/legal-content";

type Kind = "agb" | "impressum";

const BACK: Record<Lang, string> = {
  en: "← Back to website",
  de: "← Zurück zur Website",
  es: "← Volver al sitio",
  nl: "← Terug naar website",
};

const TO_IMPRESSUM: Record<Lang, string> = {
  en: "Imprint",
  de: "Impressum",
  es: "Aviso legal",
  nl: "Colofon",
};

const TO_AGB: Record<Lang, string> = {
  en: "Terms & Conditions",
  de: "AGB",
  es: "Términos y condiciones",
  nl: "Voorwaarden",
};

export function LegalPage({ kind }: { kind: Kind }) {
  const { lang } = useLang();
  // The AGB exists in all four languages; the Impressum is German-only.
  const html = kind === "agb" ? AGB_HTML[lang] : IMPRESSUM_HTML;
  const showLangBar = kind === "agb";

  return (
    <div className={`legal-page${showLangBar ? "" : " legal-page--nobar"}`}>
      {showLangBar && <LangBar />}
      <nav className="legal-nav">
        <a href="/" className="legal-logo">
          RAW<span>.</span>MOUNTAIN
        </a>
        <a href="/" className="legal-back">
          {BACK[lang]}
        </a>
      </nav>

      <div className="container" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="legal-footer">
        &copy; 2026 RAW.MOUNTAIN &middot; Ferdi Christ &middot; Kempten im Allgäu
        &middot;{" "}
        {kind === "agb" ? (
          <a href="/impressum">{TO_IMPRESSUM[lang]}</a>
        ) : (
          <a href="/agb">{TO_AGB[lang]}</a>
        )}{" "}
        &middot; <a href="/">{BACK[lang].replace("← ", "")}</a>
      </div>
    </div>
  );
}
