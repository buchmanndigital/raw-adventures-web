"use client";

import { createElement } from "react";
import type { HTMLAttributes } from "react";
import { useLang } from "@/lib/lang-context";
import type { TranslationKey } from "@/lib/translations";

export function Tx({
  k,
  as = "span",
  ...rest
}: {
  k: TranslationKey;
  as?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "dangerouslySetInnerHTML">) {
  const { t } = useLang();
  return createElement(as, {
    ...rest,
    dangerouslySetInnerHTML: { __html: t(k) },
  });
}
