import { ImageResponse } from "next/og";
import { services } from "@/lib/data/services";

export const runtime = "edge";
export const alt = "Hotel brokerage services — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: slug,
      alt: service ? `${service.name} — Matthews Hotel Markets` : alt,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
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
            "linear-gradient(135deg, #050b18 0%, #14223d 50%, #0c4ba1 100%)",
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
            {service.shortName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1050,
            }}
          >
            {service.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 1000,
              lineHeight: 1.25,
            }}
          >
            {service.tagline}
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
          <div>matthewshotelmarkets.com/services/{service.slug}</div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>
            {service.rangeValue}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
