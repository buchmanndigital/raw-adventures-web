"use client";

import { useLang } from "@/lib/lang-context";
import type { Lang } from "@/lib/translations";

const langs: Lang[] = ["en", "de", "es", "nl"];

export function LangBar() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-bar">
      <span className="lang-label">Language:</span>
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-btn${lang === l ? " active" : ""}`}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
