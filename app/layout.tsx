import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import { LangProvider } from "@/lib/lang-context";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const barlow = Barlow({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-barlow",
});
const barlowCond = Barlow_Condensed({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-cond",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "RAW ADVENTURES — guided freeride & cat trips",
    template: "%s · RAW ADVENTURES",
  },
  description:
    "Guided catskiing, catboarding and backcountry trips — small groups, local expertise, clear pricing.",
  openGraph: {
    type: "website",
    siteName: "RAW.ADVENTURES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebas.variable} ${barlow.variable} ${barlowCond.variable}`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
