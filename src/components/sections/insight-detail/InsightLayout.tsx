import * as React from "react";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { team } from "@/lib/data/team";
import { markets } from "@/lib/data/markets";
import { brands } from "@/lib/data/brands";
import { insights as allInsights } from "@/lib/data/insights";
import type { Insight } from "@/lib/data/insights";

const kindLabel: Record<Insight["kind"], string> = {
  outlook: "Outlook",
  "white-paper": "White Paper",
  briefing: "Briefing",
};

export interface InsightLayoutProps {
  insight: Insight;
}

function resolveAuthors(authorSlugs: string[]) {
  return authorSlugs
    .map((slug) => team.find((b) => b.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
}

function formatLastUpdated(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// Splits the body into rendered nodes, recognizing markdown-style "## Heading"
// lines as section headings. Numbered lists ("1. ", "2. ") and bullet lists
// ("- ", "• ") get rendered as proper lists. Everything else is a paragraph.
type BodyNode =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] };

function parseBody(body: string): BodyNode[] {
  const blocks = body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  const nodes: BodyNode[] = [];
  for (const block of blocks) {
    if (block.startsWith("## ")) {
      nodes.push({ kind: "h2", text: block.replace(/^##\s+/, "").trim() });
      continue;
    }
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isOl = lines.every((l) => /^\d+\.\s+/.test(l));
    const isUl = lines.every((l) => /^[-•]\s+/.test(l));
    if (isOl && lines.length > 1) {
      nodes.push({ kind: "ol", items: lines.map((l) => l.replace(/^\d+\.\s+/, "")) });
      continue;
    }
    if (isUl && lines.length > 1) {
      nodes.push({ kind: "ul", items: lines.map((l) => l.replace(/^[-•]\s+/, "")) });
      continue;
    }
    nodes.push({ kind: "p", text: block });
  }
  return nodes;
}

export function InsightLayout({ insight }: InsightLayoutProps) {
  const nodes = parseBody(insight.body);
  const lastUpdatedFormatted = formatLastUpdated(insight.lastUpdated);

  // Pick a pull-quote: a mid-document paragraph between 100 and 220 chars.
  const pullQuoteIndex = (() => {
    let bestIdx = -1;
    let bestLen = Infinity;
    nodes.forEach((n, i) => {
      if (n.kind !== "p") return;
      if (i === 0) return;
      if (n.text.length >= 100 && n.text.length <= 220 && n.text.length < bestLen) {
        bestLen = n.text.length;
        bestIdx = i;
      }
    });
    return bestIdx;
  })();

  // Insert the keyStats grid roughly one-third of the way through (so it sits
  // in the first viewport for long articles), but only when stats exist.
  const statInsertionIdx = insight.keyStats && insight.keyStats.length >= 3
    ? Math.max(2, Math.floor(nodes.length / 3))
    : -1;

  const relatedMarkets = (insight.relatedMarkets ?? [])
    .map((s) => markets.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m))
    .slice(0, 6);
  const relatedBrands = (insight.relatedBrands ?? [])
    .map((s) => brands.find((b) => b.slug === s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b))
    .slice(0, 6);
  const relatedInsights = (insight.relatedInsights ?? [])
    .map((s) => allInsights.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .slice(0, 4);

  return (
    <article className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-[692px] px-6">
        {/* Header meta */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
          <span className="rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] px-2.5 py-1 font-medium">
            {kindLabel[insight.kind]}
          </span>
          <span className="text-[#86868b]">{insight.date}</span>
          {lastUpdatedFormatted && (
            <>
              <span className="text-[#d2d2d7]" aria-hidden="true">·</span>
              <span className="text-[#86868b] normal-case tracking-[-0.005em] text-[11px]">
                Updated {lastUpdatedFormatted}
              </span>
            </>
          )}
          {insight.tags.length > 0 && (
            <>
              <span className="text-[#d2d2d7]" aria-hidden="true">·</span>
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

        {/* Byline */}
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

        {/* TL;DR — the block LLMs lift first. Per GEO template, first viewport. */}
        {insight.tldr && insight.tldr.length > 0 && (
          <aside
            className="mt-10 rounded-[20px] bg-[#f5f5f7] p-7"
            aria-labelledby="tldr-heading"
          >
            <h2
              id="tldr-heading"
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
            >
              TL;DR
            </h2>
            <ul className="mt-4 space-y-2.5">
              {insight.tldr.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[15px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f] pl-5 relative"
                >
                  <span
                    className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Cover gradient — visual rhythm marker between TLDR and body */}
        <div
          className={`mt-10 aspect-[16/9] w-full rounded-[28px] bg-gradient-to-br ${insight.cover}`}
          aria-hidden="true"
        />

        {/* Body — section-aware markdown subset */}
        <div className="mt-12">
          {nodes.map((n, i) => {
            const blocks: React.ReactNode[] = [];
            if (n.kind === "h2") {
              blocks.push(
                <h2
                  key={`h2-${i}`}
                  className="mt-12 text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
                >
                  {n.text}
                </h2>,
              );
            } else if (n.kind === "ul") {
              blocks.push(
                <ul
                  key={`ul-${i}`}
                  className="mt-6 space-y-3 list-disc list-outside pl-5 marker:text-[#1a3a6b]"
                >
                  {n.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]"
                    >
                      {it}
                    </li>
                  ))}
                </ul>,
              );
            } else if (n.kind === "ol") {
              blocks.push(
                <ol
                  key={`ol-${i}`}
                  className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[#1a3a6b]"
                >
                  {n.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]"
                    >
                      {it}
                    </li>
                  ))}
                </ol>,
              );
            } else if (i === pullQuoteIndex) {
              blocks.push(
                <blockquote
                  key={`q-${i}`}
                  className="my-10 italic font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.32] tracking-[-0.012em] text-[#1d1d1f] max-w-[58ch] border-l-2 border-[#1a3a6b] pl-6"
                >
                  {n.text}
                </blockquote>,
              );
            } else {
              blocks.push(
                <p
                  key={`p-${i}`}
                  className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f] mt-6 first:mt-0"
                >
                  {n.text}
                </p>,
              );
            }

            // Insert key stats panel after the planned insertion point.
            if (i === statInsertionIdx && insight.keyStats && insight.keyStats.length > 0) {
              blocks.push(
                <section
                  key={`stats-${i}`}
                  className="my-12 rounded-[22px] bg-[#0a1226] text-white p-8"
                  aria-labelledby="stats-heading"
                >
                  <h2
                    id="stats-heading"
                    className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/60"
                  >
                    By the numbers
                  </h2>
                  <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                    {insight.keyStats.map((s, j) => (
                      <div key={j}>
                        <dt className="text-[28px] font-semibold tabular-nums tracking-[-0.025em] text-white">
                          {s.value}
                        </dt>
                        <dd className="mt-2 text-[13px] leading-[1.4] tracking-[-0.014em] text-white/75">
                          {s.label}
                          {s.source && (
                            <span className="block mt-1 text-[11px] text-white/50">
                              {s.source}
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>,
              );
            }
            return <React.Fragment key={i}>{blocks}</React.Fragment>;
          })}
        </div>

        {/* FAQ — direct citation surface for AI Overview / ChatGPT / Perplexity. */}
        {insight.faq && insight.faq.length > 0 && (
          <section
            className="mt-16 pt-10 border-t border-[color:var(--divider)]"
            aria-labelledby="faq-heading"
          >
            <h2
              id="faq-heading"
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
            >
              Frequently asked
            </h2>
            <dl className="mt-6 divide-y divide-[color:var(--divider)]">
              {insight.faq.map((f, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-[18px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-[1.55] tracking-[-0.014em] text-[#424245]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Sources & methodology — Cite Sources is the highest-leverage GEO tactic. */}
        {insight.sources && insight.sources.length > 0 && (
          <section
            className="mt-14 pt-10 border-t border-[color:var(--divider)]"
            aria-labelledby="sources-heading"
          >
            <h2
              id="sources-heading"
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
            >
              Sources
            </h2>
            <ol className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[#86868b]">
              {insight.sources.map((s, i) => (
                <li
                  key={i}
                  className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]"
                >
                  <a
                    href={s.url}
                    rel="noopener external"
                    target="_blank"
                    className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                  >
                    {s.label}
                  </a>
                  {s.publisher && (
                    <span className="text-[#86868b]"> · {s.publisher}</span>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Related — internal cross-links for topical authority */}
        {(relatedInsights.length > 0 || relatedMarkets.length > 0 || relatedBrands.length > 0) && (
          <section
            className="mt-14 pt-10 border-t border-[color:var(--divider)]"
            aria-labelledby="related-heading"
          >
            <h2
              id="related-heading"
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
            >
              Related
            </h2>

            {relatedInsights.length > 0 && (
              <div className="mt-6">
                <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">More insights</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedInsights.map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/insights/${i.slug}`}
                        className="block rounded-[14px] bg-[#f5f5f7] p-4 hover:bg-[#ececef] transition-colors"
                      >
                        <p className="text-[15px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                          {i.title}
                        </p>
                        <p className="mt-1 text-[12px] tracking-[-0.014em] text-[#86868b]">
                          {kindLabel[i.kind]} · {i.date}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedMarkets.length > 0 && (
              <div className="mt-6">
                <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">Markets covered</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {relatedMarkets.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/markets/${m.slug}`}
                        className="inline-block rounded-full bg-[#f5f5f7] hover:bg-[#ececef] transition-colors px-3 py-1.5 text-[13px] tracking-[-0.014em] text-[#1d1d1f]"
                      >
                        {m.city}, {m.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedBrands.length > 0 && (
              <div className="mt-6">
                <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">Brand flags</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {relatedBrands.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/hotels-for-sale/${b.slug}`}
                        className="inline-block rounded-full bg-[#f5f5f7] hover:bg-[#ececef] transition-colors px-3 py-1.5 text-[13px] tracking-[-0.014em] text-[#1d1d1f]"
                      >
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 pt-10 border-t border-[color:var(--divider)]">
          <p className="text-[14px] tracking-[-0.014em] text-[#86868b]">
            Selling, buying, or refinancing a hotel? Talk to the team.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Pill variant="primary" href="/contact">
              Talk to us
            </Pill>
            {insight.downloadHref && insight.downloadHref !== "#" && (
              <Pill variant="secondary" href={insight.downloadHref}>
                Download PDF
              </Pill>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default InsightLayout;
