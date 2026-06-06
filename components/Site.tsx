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

const GALLERY_1 = [
  { className: "tall", text: "Photo 1", size: "Portrait · Best: action shot riding" },
  { text: "Photo 2", size: "Landscape · Snowcat / terrain" },
  { text: "Photo 3", size: "Landscape · Powder / mountain view" },
  { className: "wide", text: "Photo 4", size: "Wide · Group / hotel / dinner scene" },
  { text: "Photo 5", size: "Landscape · SPA / après" },
  { text: "Photo 6", size: "Landscape · Skopje / transfer" },
];

const GALLERY_2 = [
  { text: "Photo 7", size: "Landscape · Dinner / food scene" },
  { text: "Photo 8", size: "Landscape · SPA / relaxing" },
  { className: "tall", text: "Photo 9", size: "Portrait · Mountain / landscape" },
  { className: "wide", text: "Photo 10", size: "Wide · Snowcat in action / group riding" },
  { text: "Photo 11", size: "Landscape · Hotel exterior / view" },
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
