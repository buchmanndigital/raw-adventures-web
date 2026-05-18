import { BasePathProvider } from "@/components/BasePathContext";
import { Site } from "@/components/Site";
import { TourJsonLd } from "@/components/TourJsonLd";
import { getSiteUrl } from "@/lib/site-url";
import {
  isTourSlug,
  tourPath,
  TOUR_SLUGS,
  type TourSlug,
} from "@/lib/tours";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TOUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: raw } = await params;
  if (!isTourSlug(raw)) return {};
  const canonical = new URL(tourPath(raw), getSiteUrl()).toString();
  return {
    title: "Catskiing & Catboarding — North Macedonia",
    description:
      "Shar Mountains · Popova Šapka: 6 riding days, small groups, packages from €1,990. Europe’s long-running cat operation.",
    alternates: { canonical },
    openGraph: {
      title: "Catskiing & Catboarding — North Macedonia · RAW ADVENTURES",
      description:
        "4,000+ vertical meters per day, all-inclusive logistics, Balkan value.",
      url: canonical,
      type: "website",
    },
  };
}

export default async function TourPage({ params }: Props) {
  const { slug: raw } = await params;
  if (!isTourSlug(raw)) notFound();
  const slug = raw as TourSlug;

  return (
    <>
      <TourJsonLd slug={slug} />
      <BasePathProvider value={tourPath(slug)}>
        <Site />
      </BasePathProvider>
    </>
  );
}
