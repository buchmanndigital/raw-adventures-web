import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { TOUR_SLUGS, tourPath } from "@/lib/tours";

/** Nur 200-URLs: `/` leitet permanent auf die Tour um — keine Dopplung in der Sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().toString().replace(/\/$/, "");
  const when = new Date();
  return TOUR_SLUGS.map((slug) => ({
    url: `${base}${tourPath(slug)}`,
    lastModified: when,
    changeFrequency: "weekly" as const,
    priority: slug === TOUR_SLUGS[0] ? 1 : 0.9,
  }));
}
