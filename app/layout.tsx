import type { Metadata } from "next";
import localFont from "next/font/local";
import { LangProvider } from "@/lib/lang-context";
import { BRAND_NAME, SITE_NAME, TOUR_SEO } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const bebas = localFont({
  src: [
    {
      path: "./fonts/bebas-neue-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/bebas-neue-400-latin-ext.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const barlow = localFont({
  src: [
    {
      path: "./fonts/barlow-300-latin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/barlow-300-latin-ext.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/barlow-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/barlow-400-latin-ext.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/barlow-500-latin.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/barlow-500-latin-ext.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const barlowCond = localFont({
  src: [
    {
      path: "./fonts/barlow-condensed-300-latin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-300-latin-ext.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-400-latin-ext.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-600-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-600-latin-ext.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-700-latin.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-700-latin-ext.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-barlow-cond",
  display: "swap",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

const siteUrl = getSiteUrl();
const primaryTour = TOUR_SEO["shar-mountains-catskiing"];

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${primaryTour.shortTitle} | ${BRAND_NAME}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: primaryTour.description,
  applicationName: SITE_NAME,
  authors: [{ name: "Ferdi Christ" }, { name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "Adventure travel",
  keywords: primaryTour.keywords,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@raw_adventures",
    creator: "@raw_adventures",
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
