import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthews Hotel Markets — National Hotel Investment Sales & Brokerage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
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
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          Matthews Hotel Markets
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 980,
            }}
          >
            Hospitality finance and sales.{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Nationwide.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            Loans from $5M, dispositions from $2M, every chain scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>matthewshotelmarkets.com</div>
          <div>$3.5B closed · 670+ hotels</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
