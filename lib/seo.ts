import { getSiteUrl } from "@/lib/site-url";
import { tourPath, type TourSlug } from "@/lib/tours";

export const SITE_NAME = "RAW.ADVENTURES";
export const BRAND_NAME = "RAW ADVENTURES";
export const CONTACT_EMAIL = "info@raw-adventures.com";
export const DEFAULT_LOCALE = "en";

export const TOUR_SEO: Record<
  TourSlug,
  {
    title: string;
    shortTitle: string;
    description: string;
    socialDescription: string;
    aiSummary: string;
    location: string;
    destinationCountry: string;
    destinationRegion: string;
    destinationVillage: string;
    priceFrom: number;
    currency: string;
    durationDays: number;
    ridingDays: number;
    lastModified: string;
    keywords: string[];
  }
> = {
  "shar-mountains-catskiing": {
    title:
      "Catskiing & Catboarding in North Macedonia | Shar Mountains Powder Trip",
    shortTitle: "Catskiing & Catboarding North Macedonia",
    description:
      "Guided catskiing and catboarding in North Macedonia's Shar Mountains: 6 riding days, small groups, snowcat access, local guides and packages from €1,990.",
    socialDescription:
      "Ride untracked powder in the Shar Mountains above Popova Sapka: 6 guided catskiing and catboarding days, small groups, snowcat access and Balkan value from €1,990.",
    aiSummary:
      "RAW.ADVENTURES offers guided catskiing and catboarding trips in the Shar Mountains above Popova Sapka, North Macedonia. The flagship package includes 6 riding days, 7 nights, snowcat access, airport transfers from Skopje, hotel meals, small groups, local guide expertise and packages from €1,990 per person.",
    location: "Popova Sapka, Shar Mountains, North Macedonia",
    destinationCountry: "North Macedonia",
    destinationRegion: "Shar Mountains",
    destinationVillage: "Popova Sapka",
    priceFrom: 1990,
    currency: "EUR",
    durationDays: 8,
    ridingDays: 6,
    lastModified: "2026-05-18",
    keywords: [
      "catskiing North Macedonia",
      "catboarding North Macedonia",
      "catskiing Europe",
      "catboarding Europe",
      "Shar Mountains catskiing",
      "Popova Sapka freeride",
      "North Macedonia powder trip",
      "snowcat skiing Europe",
      "guided freeride trip",
      "Balkan powder snowboarding",
    ],
  },
};

export function getTourUrl(slug: TourSlug): string {
  return new URL(tourPath(slug), getSiteUrl()).toString();
}
