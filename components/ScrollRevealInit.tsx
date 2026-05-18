"use client";

import { useLang } from "@/lib/lang-context";
import { useEffect } from "react";

/** Mirrors the static HTML: every `.reveal` is observed (also after language switch). */
export function ScrollRevealInit() {
  const { lang } = useLang();
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("visible"), i * 80);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);
  return null;
}
