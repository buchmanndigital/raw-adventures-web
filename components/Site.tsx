"use client";

import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { LangBar } from "@/components/LangBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { WhySection } from "@/components/WhySection";
import { TerrainSection } from "@/components/TerrainSection";
import { PricingSection } from "@/components/PricingSection";
import { SeasonSection } from "@/components/SeasonSection";
import { HowSection } from "@/components/HowSection";
import { FaqSection } from "@/components/FaqSection";
import { AboutSection } from "@/components/AboutSection";
import { TrustSection } from "@/components/TrustSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
        <TerrainSection />
        <PricingSection />
        <SeasonSection />
        <HowSection />
        <FaqSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
