import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { BRAND_NAME, TOUR_SEO } from "@/lib/seo";
import { isTourSlug } from "@/lib/tours";

export const runtime = "edge";
export const alt =
  "RAW MOUNTAIN catskiing and catboarding in the Shar Mountains, North Macedonia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { slug: raw } = await params;
  if (!isTourSlug(raw)) notFound();
  const tour = TOUR_SEO[raw];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f0e8",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 76% 24%, rgba(111,168,196,0.28), transparent 32%), radial-gradient(circle at 20% 82%, rgba(212,85,10,0.2), transparent 30%)",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              color: "#d4550a",
              fontWeight: 700,
            }}
          >
            {BRAND_NAME}
          </div>
          <div style={{ fontSize: 26, color: "#a9a49a" }}>
            From €{tour.priceFrom} · {tour.ridingDays} riding days
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.92,
              fontWeight: 900,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            CATSKIING & CATBOARDING
          </div>
          <div
            style={{
              fontSize: 50,
              lineHeight: 1,
              color: "#6fa8c4",
              fontWeight: 800,
            }}
          >
            North Macedonia · Shar Mountains
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#d8d0c4",
              maxWidth: 780,
            }}
          >
            Small groups, snowcat access, local guides and untracked Balkan
            powder above Popova Sapka.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 25,
            color: "#f5f0e8",
          }}
        >
          <span>6 riding days</span>
          <span style={{ color: "#d4550a" }}>·</span>
          <span>4,000+ vertical meters/day</span>
          <span style={{ color: "#d4550a" }}>·</span>
          <span>Skopje transfers</span>
        </div>
      </div>
    ),
    size,
  );
}
