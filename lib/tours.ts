/** Slugs match URL segments under /tours; stable for SEO, expand when adding trips. */
export const TOUR_SLUGS = ["shar-mountains-catskiing"] as const;

export type TourSlug = (typeof TOUR_SLUGS)[number];

export function tourPath(slug: TourSlug): `/tours/${TourSlug}` {
  return `/tours/${slug}`;
}

export function isTourSlug(s: string): s is TourSlug {
  return (TOUR_SLUGS as readonly string[]).includes(s);
}
