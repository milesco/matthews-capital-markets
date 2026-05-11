import { ImageResponse } from "next/og";
import { offices } from "@/lib/data/offices";

export const runtime = "edge";
export const alt = "Matthews Hotel Markets office";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const office = offices.find((o) => o.slug === slug);
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: slug,
      alt: office
        ? `${office.name} — Matthews Hotel Markets ${office.city}, ${office.state}`
        : alt,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const office = offices.find((o) => o.slug === slug);

  if (!office) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a1226",
            color: "#ffffff",
            fontSize: 64,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Matthews Hotel Markets
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0a1226 0%, #1a3a6b 60%, #0066cc 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          <div>Matthews Hotel Markets</div>
          <div
            style={{
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 999,
              fontSize: 14,
            }}
          >
            {office.isHeadquarters ? "Headquarters" : "Office"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              maxWidth: 1050,
            }}
          >
            {office.city}, {office.state}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 1050,
              lineHeight: 1.2,
            }}
          >
            {office.marketTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div>matthewshotelmarkets.com/offices/{office.slug}</div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>
            {office.streetAddress || office.city}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
