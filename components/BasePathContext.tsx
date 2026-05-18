"use client";

import { createContext, useContext, useMemo } from "react";

/**
 * Prefix for in-page anchors (e.g. /tours/shar-mountains-catskiing).
 * Use "" on the tour page when same route — but we always set the full tour path for consistent URLs in the nav.
 */
const BasePathContext = createContext("");

export function BasePathProvider({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <BasePathContext.Provider value={value}>{children}</BasePathContext.Provider>
  );
}

/** Base path without trailing slash, e.g. /tours/shar-mountains-catskiing */
export function useBasePath(): string {
  return useContext(BasePathContext);
}

/** Returns builder for `#section` links, e.g. `/tours/slug#pricing` */
export function useHashLink(): (id: string) => string {
  const base = useBasePath();
  return useMemo(
    () => (id: string) => `${base}#${id}`,
    [base],
  );
}
