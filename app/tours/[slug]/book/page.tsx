import { BasePathProvider } from "@/components/BasePathContext";
import { BookingPage } from "@/components/BookingPage";
import { getTourUrl, TOUR_SEO } from "@/lib/seo";
import { isTourSlug, tourPath, TOUR_SLUGS, type TourSlug } from "@/lib/tours";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TOUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: raw } = await params;
  if (!isTourSlug(raw)) return {};
  const tour = TOUR_SEO[raw];
  const canonical = `${getTourUrl(raw)}/book`;
  return {
    title: `Book ${tour.shortTitle}`,
    description: `Static booking request for ${tour.shortTitle}: preferred dates, group size, riding level, off-piste experience, avalanche gear and travel details.`,
    alternates: { canonical },
    robots: { index: true, follow: true },
  };
}

export default async function BookTourPage({ params }: Props) {
  const { slug: raw } = await params;
  if (!isTourSlug(raw)) notFound();
  const slug = raw as TourSlug;

  return (
    <BasePathProvider value={tourPath(slug)}>
      <BookingPage />
    </BasePathProvider>
  );
}
