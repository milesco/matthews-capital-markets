import { ImageResponse } from "next/og";
import { brands } from "@/lib/data/brands";

export const runtime = "edge";
export const alt = "Brand-flag hotel for sale — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const flag = brands.find((b) => b.slug === brand);
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: brand,
      alt: flag
        ? `${flag.name} for sale — investment sales specialists, Matthews Hotel Markets`
        : alt,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const flag = brands.find((b) => b.slug === brand);

  if (!flag) {
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
            "linear-gradient(135deg, #08111f 0%, #1d2d4a 50%, #2057a8 100%)",
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
            {flag.parentCompany}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1050,
            }}
          >
            {flag.name} for sale
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 1000,
              lineHeight: 1.2,
            }}
          >
            {flag.segment} · investment sales, capital markets, and acquisition advisory.
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
          <div>matthewshotelmarkets.com/hotels-for-sale/{flag.slug}</div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>
            {flag.parentTicker || flag.parentCompany}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
