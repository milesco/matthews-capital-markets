import { ImageResponse } from "next/og";
import { listings } from "@/lib/data/listings";

export const runtime = "edge";
export const alt = "Hotel for sale — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = listings.find((l) => l.slug === slug);
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: slug,
      alt: listing
        ? `${listing.name} — ${listing.keys}-key ${listing.segment} hotel for sale in ${listing.city}, ${listing.state}`
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
  const listing = listings.find((l) => l.slug === slug);

  if (!listing) {
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
            {listing.status === "available" ? "Available" : "Under Contract"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
            }}
          >
            {listing.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 900,
            }}
          >
            {listing.keys} keys · {listing.segment} · {listing.city},{" "}
            {listing.state}
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
          <div>matthewshotelmarkets.com</div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>
            {listing.askingPrice}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
