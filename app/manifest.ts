import type { MetadataRoute } from "next";
import { BRAND_NAME, TOUR_SEO } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const tour = TOUR_SEO["shar-mountains-catskiing"];
  return {
    name: `${BRAND_NAME} - ${tour.shortTitle}`,
    short_name: BRAND_NAME,
    description: tour.description,
    start_url: "/tours/shar-mountains-catskiing",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#d4550a",
    categories: ["travel", "sports", "lifestyle"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
    ],
  };
}
