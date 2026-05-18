import { permanentRedirect } from "next/navigation";
import { tourPath, TOUR_SLUGS } from "@/lib/tours";

/** Solange nur eine Tour existiert: Root konsolidiert SEO auf der Tour-URL. Später: echte Startseite hier rendern. */
export default function RootRedirect() {
  permanentRedirect(tourPath(TOUR_SLUGS[0]));
}
