import { ImageResponse } from "next/og";
import { team } from "@/lib/data/team";

export const runtime = "edge";
export const alt = "Hotel broker — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);

  if (!member) {
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

  const initials = member.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
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
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.7,
              fontWeight: 500,
            }}
          >
            Matthews Hotel Markets
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              {member.name}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 700,
              }}
            >
              {member.title}
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,255,255,0.6)",
                marginTop: 8,
              }}
            >
              {member.office} · {member.specialties.join(" · ")}
            </div>
          </div>

          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)" }}>
            matthewshotelmarkets.com/team/{member.slug}
          </div>
        </div>

        <div
          style={{
            width: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {initials}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
