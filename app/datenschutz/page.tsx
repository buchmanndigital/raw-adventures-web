import { LegalPage } from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von RAW.MOUNTAIN gemäß DSGVO: Hosting (Vercel), Reichweitenmessung, Domain- und E-Mail-Hosting (STRATO), Buchungsanfragen und deine Rechte.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzRoute() {
  return <LegalPage kind="datenschutz" />;
}
