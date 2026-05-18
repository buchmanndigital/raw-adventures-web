/** Canonical site origin for SEO (sitemap, metadataBase, JSON-LD). */
export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://raw-adventures-web.vercel.app";
  return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
}
