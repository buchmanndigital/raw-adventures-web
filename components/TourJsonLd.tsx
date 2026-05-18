import { getSiteUrl } from "@/lib/site-url";
import { tourPath, type TourSlug } from "@/lib/tours";

const TRIP_NAME: Record<TourSlug, { name: string; description: string }> = {
  "shar-mountains-catskiing": {
    name: "Catskiing & Catboarding — North Macedonia (Shar Mountains)",
    description:
      "Six-day guided catskiing and catboarding at Popova Šapka, Shar Mountains: small groups, all-inclusive logistics, alpine terrain.",
  },
};

export function TourJsonLd({ slug }: { slug: TourSlug }) {
  const origin = getSiteUrl().origin;
  const url = new URL(tourPath(slug), getSiteUrl()).toString();
  const trip = TRIP_NAME[slug];
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.description,
    url,
    touristType: "Adventure travel",
    provider: {
      "@type": "Organization",
      name: "RAW.ADVENTURES",
      url: origin,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
