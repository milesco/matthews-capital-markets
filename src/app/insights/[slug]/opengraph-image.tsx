import { ImageResponse } from "next/og";
import { insights } from "@/lib/data/insights";
import { team } from "@/lib/data/team";

export const runtime = "edge";
export const alt = "Hotel investment insights — Matthews Hotel Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const KIND_LABEL: Record<string, string> = {
  outlook: "Quarterly Outlook",
  "white-paper": "White Paper",
  briefing: "Briefing",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
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

  const authorNames = insight.authorSlugs
    .map((s) => team.find((m) => m.slug === s)?.name)
    .filter(Boolean) as string[];
  const byline =
    authorNames.length > 0 ? authorNames.join(" & ") : "Matthews Hotel Markets";

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
            "linear-gradient(160deg, #0a1226 0%, #1a3a6b 50%, #0066cc 100%)",
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
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          <div>{KIND_LABEL[insight.kind] || "Insight"}</div>
          <div>Matthews Hotel Markets</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1050,
            }}
          >
            {insight.title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 950,
            }}
          >
            {insight.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <div>By {byline}</div>
          <div>{insight.date}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
