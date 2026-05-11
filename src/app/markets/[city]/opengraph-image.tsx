import { ImageResponse } from "next/og";
import { markets } from "@/lib/data/markets";

export const runtime = "edge";
export const alt = "Hotel market — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const market = markets.find((m) => m.slug === city);
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: city,
      alt: market
        ? `${market.city}, ${market.state} hotel market — cap rates, comps, brokers`
        : alt,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const market = markets.find((m) => m.slug === city);

  if (!market) {
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
            {market.region}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
            }}
          >
            {market.city}, {market.state}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 1000,
              lineHeight: 1.2,
            }}
          >
            Hotel cap rates, transaction comps, and named brokers across the {market.msa}.
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
          <div>matthewshotelmarkets.com/markets/{market.slug}</div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>
            {market.capRateRange.split(".")[0]}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
