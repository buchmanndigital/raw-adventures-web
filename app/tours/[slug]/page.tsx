import { BasePathProvider } from "@/components/BasePathContext";
import { Site } from "@/components/Site";
import { TourJsonLd } from "@/components/TourJsonLd";
import { BRAND_NAME, getTourUrl, TOUR_SEO } from "@/lib/seo";
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
  const canonical = getTourUrl(raw);
  const seo = TOUR_SEO[raw];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${seo.shortTitle} | ${BRAND_NAME}`,
      description: seo.socialDescription,
      url: canonical,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.shortTitle} | ${BRAND_NAME}`,
      description: seo.socialDescription,
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
