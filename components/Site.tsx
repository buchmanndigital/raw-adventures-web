"use client";

import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { LangBar } from "@/components/LangBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { WhySection } from "@/components/WhySection";
import { GallerySection } from "@/components/GallerySection";
import { TerrainSection } from "@/components/TerrainSection";
import { PricingSection } from "@/components/PricingSection";
import { PriceWhySection } from "@/components/PriceWhySection";
import { SeasonSection } from "@/components/SeasonSection";
import { HowSection } from "@/components/HowSection";
import { ItinerarySection } from "@/components/ItinerarySection";
import { FaqSection } from "@/components/FaqSection";
import { AboutSection } from "@/components/AboutSection";
import { TrustSection } from "@/components/TrustSection";
import { ContactSection } from "@/components/ContactSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const RIDE_ALT = "Catboarding & freeriding in the Šar Mountains, North Macedonia";
const CAMP_ALT = "RAW.MOUNTAIN basecamp — lodge, après & mountain life";

// RAW FOOTAGE — riding & action. Portraits placed in "tall" slots, interleaved
// with landscapes for a staggered editorial grid.
const GALLERY_1 = [
  { className: "tall", src: "/gallery/footage/footage-02.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-03.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-04.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-12.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-05.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-06.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-13.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-07.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-08.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-14.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-09.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-10.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-16.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-11.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-01.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-17.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-15.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-18.webp", alt: RIDE_ALT },
  { className: "tall", src: "/gallery/footage/footage-19.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-20.webp", alt: RIDE_ALT },
  { src: "/gallery/footage/footage-21.webp", alt: RIDE_ALT },
];

// RAW BASECAMP — lodge, après & camp life.
const GALLERY_2 = [
  { className: "tall", src: "/gallery/basecamp/basecamp-01.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-03.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-04.webp", alt: CAMP_ALT },
  { className: "tall", src: "/gallery/basecamp/basecamp-02.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-07.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-08.webp", alt: CAMP_ALT },
  { className: "tall", src: "/gallery/basecamp/basecamp-05.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-09.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-12.webp", alt: CAMP_ALT },
  { className: "tall", src: "/gallery/basecamp/basecamp-06.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-13.webp", alt: CAMP_ALT },
  { className: "tall", src: "/gallery/basecamp/basecamp-10.webp", alt: CAMP_ALT },
  { src: "/gallery/basecamp/basecamp-14.webp", alt: CAMP_ALT },
  { className: "tall", src: "/gallery/basecamp/basecamp-11.webp", alt: CAMP_ALT },
];

export function Site() {
  return (
    <>
      <ScrollRevealInit />
      <LangBar />
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <WhySection />
        <GallerySection
          id="gallery"
          labelKey="gallery-label"
          titleKey="gallery-title"
          items={GALLERY_1}
        />
        <TerrainSection />
        <PricingSection />
        <PriceWhySection />
        <SeasonSection />
        <HowSection />
        <ItinerarySection />
        <GallerySection
          id="gallery2"
          labelKey="gallery2-label"
          titleKey="gallery2-title"
          items={GALLERY_2}
          background="var(--mid)"
        />
        <FaqSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
