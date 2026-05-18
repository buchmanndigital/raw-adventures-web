import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import { LangProvider } from "@/lib/lang-context";
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

export const metadata: Metadata = {
  title: "RAW ADVENTURES – Catskiing & Catboarding North Macedonia",
  description:
    "Catskiing & Catboarding in the Shar Mountains — North Macedonia.",
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
