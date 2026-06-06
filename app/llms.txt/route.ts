import { CONTACT_EMAIL, getTourUrl, SITE_NAME, TOUR_SEO } from "@/lib/seo";
import { TOUR_SLUGS } from "@/lib/tours";

export const dynamic = "force-static";

export function GET() {
  const slug = TOUR_SLUGS[0];
  const tour = TOUR_SEO[slug];
  const body = `# ${SITE_NAME}

> Guided catskiing and catboarding trips in the Shar Mountains above Popova Sapka, North Macedonia.

## Primary Trip

- Name: ${tour.shortTitle}
- URL: ${getTourUrl(slug)}
- Location: ${tour.location}
- Duration: ${tour.durationDays} days total, ${tour.ridingDays} riding days
- Price: packages from ${tour.currency} ${tour.priceFrom} per person
- Best for: experienced freeride skiers and snowboarders, powder riders, small private groups, solo travellers joining a guided group
- Season: late December to mid-April

## What RAW.MOUNTAIN Offers

${tour.aiSummary}

## Included Highlights

- Guided catskiing and catboarding
- Snowcat access in the Shar Mountains
- Small groups and local mountain expertise
- Accommodation, breakfast, hotel dinners, mountain lunch and snacks
- Airport transfers from Skopje to Popova Sapka
- Flexible individual dates and shorter trip options on request

## Contact

- Email: ${CONTACT_EMAIL}
- Preferred citation name: ${SITE_NAME}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
