import * as React from "react";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { team } from "@/lib/data/team";
import type { Insight } from "@/lib/data/insights";

const kindLabel: Record<Insight["kind"], string> = {
  outlook: "Outlook",
  "white-paper": "White Paper",
  briefing: "Briefing",
};

export interface InsightLayoutProps {
  insight: Insight;
}

// Resolve author slugs to TeamMembers — used for both the byline and the
// per-author Person JSON-LD. When no authors resolve, the article falls
// back to "Matthews Hotel Markets" attribution.
function resolveAuthors(authorSlugs: string[]) {
  return authorSlugs
    .map((slug) => team.find((b) => b.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
}

function ChartIllustration() {
  return (
    <figure
      className="my-12 rounded-[22px] bg-[#f5f5f7] p-6"
      aria-label="Chart illustration placeholder"
    >
      <svg
        viewBox="0 0 600 280"
        className="w-full h-auto"
        role="img"
        aria-label="Chart placeholder"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="35"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 35"
              fill="none"
              stroke="#d2d2d7"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1a3a6b" />
            <stop offset="100%" stopColor="#5d80b8" />
          </linearGradient>
        </defs>
        <rect width="600" height="280" fill="url(#grid)" />
        {/* Sample line */}
        <path
          d="M 30 220 L 110 200 L 190 175 L 270 160 L 350 130 L 430 110 L 510 90 L 570 70"
          fill="none"
          stroke="url(#line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Data points */}
        {[
          [30, 220],
          [110, 200],
          [190, 175],
          [270, 160],
          [350, 130],
          [430, 110],
          [510, 90],
          [570, 70],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#fff"
            stroke="#1a3a6b"
            strokeWidth="2"
          />
        ))}
      </svg>
      <figcaption className="mt-3 text-[12px] tracking-[-0.01em] text-[#86868b]">
        Indicative trend, full chart pack in the downloadable PDF.
      </figcaption>
    </figure>
  );
}

export function InsightLayout({ insight }: InsightLayoutProps) {
  const paragraphs = insight.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // Insert chart illustration roughly in the middle.
  const midIndex = Math.max(1, Math.floor(paragraphs.length / 2));

  // Pick a pull-quote paragraph: pick the shortest one over 80 chars to preserve
  // editorial weight, default to second paragraph.
  const pullQuoteIndex = (() => {
    let bestIdx = -1;
    let bestLen = Infinity;
    paragraphs.forEach((p, i) => {
      if (i === 0) return;
      if (p.length >= 100 && p.length <= 220 && p.length < bestLen) {
        bestLen = p.length;
        bestIdx = i;
      }
    });
    return bestIdx;
  })();

  return (
    <article className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-[692px] px-6">
        {/* Header meta */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
          <span className="rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] px-2.5 py-1 font-medium">
            {kindLabel[insight.kind]}
          </span>
          <span className="text-[#86868b]">{insight.date}</span>
          {insight.tags.length > 0 && (
            <>
              <span className="text-[#d2d2d7]" aria-hidden="true">
                ·
              </span>
              <ul className="flex flex-wrap gap-2">
                {insight.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-[#f5f5f7] text-[#86868b] px-2.5 py-1 normal-case tracking-[-0.005em] text-[11px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Title + subtitle */}
        <h1 className="mt-8 text-[clamp(32px,4vw,64px)] font-semibold leading-[1.0625] tracking-[-0.012em] text-[#1d1d1f]">
          {insight.title}
        </h1>
        <p className="mt-4 text-[19px] leading-[1.42] tracking-[0.012em] text-[#86868b]">
          {insight.subtitle}
        </p>

        {/* Byline — visible link to author profile when known */}
        {(() => {
          const authors = resolveAuthors(insight.authorSlugs);
          if (authors.length === 0) {
            return (
              <p className="mt-6 text-[13px] tracking-[-0.014em] text-[#86868b]">
                By Matthews Hotel Markets
              </p>
            );
          }
          return (
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[#86868b]">
              By{" "}
              {authors.map((a, i) => {
                const sep =
                  i === 0
                    ? ""
                    : i === authors.length - 1
                      ? authors.length > 2
                        ? ", and "
                        : " and "
                      : ", ";
                return (
                  <React.Fragment key={a.slug}>
                    {sep}
                    <Link
                      href={`/team/${a.slug}`}
                      className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                    >
                      {a.name}
                    </Link>
                    {i === authors.length - 1 && (
                      <>, {authors[i].title}</>
                    )}
                  </React.Fragment>
                );
              })}
              <span className="text-[#86868b]"> · Matthews Hotel Markets</span>
            </p>
          );
        })()}

        {/* Cover image card */}
        <div
          className={`mt-10 aspect-[16/9] w-full rounded-[28px] bg-gradient-to-br ${insight.cover}`}
          aria-hidden="true"
        />

        {/* Body */}
        <div className="mt-12">
          {paragraphs.map((p, i) => {
            const elements: React.ReactNode[] = [];

            if (i === pullQuoteIndex) {
              elements.push(
                <blockquote
                  key={`q-${i}`}
                  className="my-10 italic font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.32] tracking-[-0.012em] text-[#1d1d1f] max-w-[58ch] border-l-2 border-[#1a3a6b] pl-6"
                >
                  {p}
                </blockquote>,
              );
            } else {
              elements.push(
                <p
                  key={`p-${i}`}
                  className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f] mt-6 first:mt-0"
                >
                  {p}
                </p>,
              );
            }

            // Insert chart roughly in the middle, after the chosen midIndex paragraph.
            if (i === midIndex - 1) {
              elements.push(<ChartIllustration key={`chart-${i}`} />);
            }

            return <React.Fragment key={i}>{elements}</React.Fragment>;
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-10 border-t border-[color:var(--divider)]">
          <p className="text-[14px] tracking-[-0.014em] text-[#86868b]">
            Want the full chart pack and underlying data?
          </p>
          <div className="mt-4">
            <Pill variant="primary" href={insight.downloadHref ?? "#"}>
              Download PDF
            </Pill>
          </div>
        </div>
      </div>
    </article>
  );
}

export default InsightLayout;
