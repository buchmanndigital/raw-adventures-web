import {
  BRAND_NAME,
  CONTACT_EMAIL,
  getTourUrl,
  SITE_NAME,
  TOUR_SEO,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import type { TourSlug } from "@/lib/tours";

const FAQ_ITEMS = [
  {
    question: "What skill level do I need?",
    answer:
      "This trip is not suitable for beginners. You should be a confident, experienced winter sports enthusiast with solid off-piste experience. If you ride red and black pistes safely and have no fear of deep snow, your guide adapts the terrain to the group.",
  },
  {
    question: "Is this only for snowboarders?",
    answer:
      "No. Both catskiing and catboarding are available. The terrain suits skiers and snowboarders equally: open powder country with no terrain park bias.",
  },
  {
    question: "How do I get to Skopje?",
    answer:
      "The easiest connections run via Zurich, Frankfurt or Istanbul. From many European cities, WizzAir flies direct to Skopje. Once you land, RAW.MOUNTAIN handles the transfer and local logistics.",
  },
  {
    question: "Do I need to bring avalanche gear?",
    answer:
      "You do not need to bring your own. Avalanche safety equipment such as LVS beacon, shovel, probe and airbag backpack is available to rent on site by advance request. Your guide is avalanche-certified and makes terrain decisions based on daily snowpack assessment.",
  },
  {
    question: "What is included in the package?",
    answer:
      "The package includes 6 full riding days, 7 nights of accommodation, breakfast, hotel dinners, daily mountain lunch and snacks, airport transfers from Skopje, professional guiding, hotel SPA access and on-site logistics.",
  },
] as const;

export function TourJsonLd({ slug }: { slug: TourSlug }) {
  const site = getSiteUrl();
  const origin = site.origin;
  const url = getTourUrl(slug);
  const trip = TOUR_SEO[slug];
  const organizationId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const tourId = `${url}#tour`;
  const offerId = `${url}#offer`;
  const faqId = `${url}#faq`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        legalName: BRAND_NAME,
        url: origin,
        email: CONTACT_EMAIL,
        founder: {
          "@type": "Person",
          name: "Ferdi Christ",
        },
        sameAs: [origin],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: origin,
        name: SITE_NAME,
        description:
          "Guided catskiing, catboarding and freeride trips with small groups and local mountain expertise.",
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: trip.shortTitle,
            item: url,
          },
        ],
      },
      {
        "@type": "TouristTrip",
        "@id": tourId,
        name: trip.shortTitle,
        description: trip.description,
        url,
        image: new URL("/icons/terrain-snowcat.webp", site).toString(),
        touristType: [
          "Adventure travel",
          "Freeride snowboarders",
          "Freeride skiers",
          "Experienced off-piste riders",
        ],
        provider: { "@id": organizationId },
        itinerary: {
          "@type": "ItemList",
          name: "Catskiing and catboarding week itinerary",
          numberOfItems: trip.durationDays,
        },
        includesObject: [
          {
            "@type": "TypeAndQuantityNode",
            name: `${trip.ridingDays} guided riding days`,
          },
          {
            "@type": "TypeAndQuantityNode",
            name: "Snowcat access",
          },
          {
            "@type": "TypeAndQuantityNode",
            name: "Airport transfers from Skopje",
          },
          {
            "@type": "TypeAndQuantityNode",
            name: "Hotel accommodation and meals",
          },
        ],
        offers: { "@id": offerId },
      },
      {
        "@type": "Offer",
        "@id": offerId,
        name: `${trip.shortTitle} package from ${trip.currency} ${trip.priceFrom}`,
        url,
        price: trip.priceFrom,
        priceCurrency: trip.currency,
        availability: "https://schema.org/InStock",
        validFrom: trip.lastModified,
        category: "Adventure travel",
        seller: { "@id": organizationId },
        itemOffered: { "@id": tourId },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
