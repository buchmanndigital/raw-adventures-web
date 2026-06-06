"use client";

import { LangBar } from "@/components/LangBar";
import { useLang } from "@/lib/lang-context";
import type { Lang } from "@/lib/translations";
import { AGB_HTML, IMPRESSUM_HTML } from "@/lib/legal-content";
import { DATENSCHUTZ_HTML } from "@/lib/datenschutz-content";

type Kind = "agb" | "impressum" | "datenschutz";

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

const TO_DATENSCHUTZ: Record<Lang, string> = {
  en: "Privacy Policy",
  de: "Datenschutz",
  es: "Privacidad",
  nl: "Privacy",
};

const CROSS_LINKS: { kind: Kind; href: string; label: Record<Lang, string> }[] = [
  { kind: "impressum", href: "/impressum", label: TO_IMPRESSUM },
  { kind: "agb", href: "/agb", label: TO_AGB },
  { kind: "datenschutz", href: "/datenschutz", label: TO_DATENSCHUTZ },
];

export function LegalPage({ kind }: { kind: Kind }) {
  const { lang } = useLang();
  // The AGB exists in all four languages; Impressum & Datenschutz are German-only.
  const html =
    kind === "agb"
      ? AGB_HTML[lang]
      : kind === "datenschutz"
        ? DATENSCHUTZ_HTML
        : IMPRESSUM_HTML;
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
        {CROSS_LINKS.filter((l) => l.kind !== kind).map((l) => (
          <span key={l.kind}>
            <a href={l.href}>{l.label[lang]}</a>
            {" · "}
          </span>
        ))}
        <a href="/">{BACK[lang].replace("← ", "")}</a>
      </div>
    </div>
  );
}
