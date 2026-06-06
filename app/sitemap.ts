import type { MetadataRoute } from "next";
import { TOUR_SEO } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import { TOUR_SLUGS, tourPath } from "@/lib/tours";

/** Nur 200-URLs: `/` leitet permanent auf die Tour um; keine Dopplung in der Sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().toString().replace(/\/$/, "");
  const tours = TOUR_SLUGS.flatMap((slug) => [
    {
      url: `${base}${tourPath(slug)}`,
      lastModified: new Date(TOUR_SEO[slug].lastModified),
      changeFrequency: "monthly" as const,
      priority: slug === TOUR_SLUGS[0] ? 1 : 0.9,
    },
    {
      url: `${base}${tourPath(slug)}/book`,
      lastModified: new Date(TOUR_SEO[slug].lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);
  const legal = ["/impressum", "/agb", "/datenschutz"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));
  return [...tours, ...legal];
}
