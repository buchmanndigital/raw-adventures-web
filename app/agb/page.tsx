import { LegalPage } from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB / Terms & Conditions",
  description:
    "Allgemeine Geschäftsbedingungen von RAW.MOUNTAIN für Catskiing- und Catboarding-Reisen in den Šar-Bergen. Es gilt deutsches Recht.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: true },
};

export default function AgbRoute() {
  return <LegalPage kind="agb" />;
}
