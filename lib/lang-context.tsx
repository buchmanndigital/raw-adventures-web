"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TranslationKey) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const stored = window.localStorage.getItem("raw-adventures-lang");
    if (stored === "en" || stored === "de" || stored === "es" || stored === "nl") {
      setLang(stored);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("raw-adventures-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = useCallback(
    (k: TranslationKey) => translations[lang][k] ?? "",
    [lang],
  );
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const v = useContext(LangContext);
  if (!v) throw new Error("useLang must be used within LangProvider");
  return v;
}
