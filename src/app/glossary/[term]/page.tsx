import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Pill } from "@/components/ui/Pill";
import { glossary, getGlossaryEntry } from "@/lib/data/glossary";
import { team } from "@/lib/data/team";
import { markets } from "@/lib/data/markets";
import { brands } from "@/lib/data/brands";
import { insights as allInsights } from "@/lib/data/insights";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { term: string };

export function generateStaticParams(): Params[] {
  return glossary.map((g) => ({ term: g.slug }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const { term: slug } = await props.params;
  const entry = getGlossaryEntry(slug);
  if (!entry) return { title: "Glossary" };
  const url = `${SITE_URL}/glossary/${entry.slug}`;
  const title = `${entry.term} — definition & worked example | Matthews Hotel Markets`;
  const description = entry.shortDef.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function GlossaryEntryPage(props: { params: Promise<Params> }) {
  const { term: slug } = await props.params;
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();

  const url = `${SITE_URL}/glossary/${entry.slug}`;
  const author = entry.authorSlug ? team.find((t) => t.slug === entry.authorSlug) : undefined;

  const relatedTerms = entry.relatedTerms
    .map((s) => glossary.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const relatedMarkets = (entry.relatedMarkets ?? [])
    .map((s) => markets.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
  const relatedBrands = (entry.relatedBrands ?? [])
    .map((s) => brands.find((b) => b.slug === s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));
  const relatedInsights = (entry.relatedInsights ?? [])
    .map((s) => allInsights.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${url}#term`,
        name: entry.term,
        description: entry.shortDef,
        url,
        inDefinedTermSet: { "@id": `${SITE_URL}/glossary#glossary` },
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${entry.term} — definition`,
        description: entry.fullDef,
        datePublished: entry.lastUpdated,
        dateModified: entry.lastUpdated,
        inLanguage: "en-US",
        author: author
          ? {
              "@type": "Person",
              "@id": `${SITE_URL}/team/${author.slug}#person`,
              name: author.name,
              url: `${SITE_URL}/team/${author.slug}`,
            }
          : { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        about: { "@id": `${url}#term` },
        citation: entry.sources.map((s) => ({
          "@type": "CreativeWork",
          name: s.label,
          url: s.url,
          ...(s.publisher ? { publisher: { "@type": "Organization", name: s.publisher } } : {}),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: entry.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE_URL}/glossary` },
          { "@type": "ListItem", position: 3, name: entry.term, item: url },
        ],
      },
    ],
  };

  const bodyParagraphs = entry.body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const lastUpdatedFormatted = (() => {
    const d = new Date(entry.lastUpdated);
    if (Number.isNaN(d.getTime())) return entry.lastUpdated;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  })();

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[692px] px-6">
            <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              <Link href="/glossary" className="hover:text-[color:var(--text-primary)] transition-colors">
                Glossary
              </Link>
              <span aria-hidden="true" className="mx-2 opacity-60">·</span>
              <span>Updated {lastUpdatedFormatted}</span>
            </p>

            <h1 className="mt-6 text-[clamp(36px,4vw,64px)] font-semibold leading-[1.0625] tracking-[-0.012em] text-[#1d1d1f]">
              {entry.term}
            </h1>

            {/* Direct-answer lead — the LLM lift */}
            <p className="mt-6 text-[19px] leading-[1.42] tracking-[0.012em] text-[#1d1d1f]">
              {entry.shortDef}
            </p>

            {author && (
              <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
                By{" "}
                <Link
                  href={`/team/${author.slug}`}
                  className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                >
                  {author.name}
                </Link>
                , {author.title} · Matthews Hotel Markets
              </p>
            )}

            {/* Quick definition card */}
            <aside className="mt-10 rounded-[20px] bg-[#f5f5f7] p-7">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
                Quick definition
              </h2>
              <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                {entry.fullDef}
              </p>
            </aside>

            {/* Body */}
            <div className="mt-12">
              {bodyParagraphs.map((p, i) => {
                if (p.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="mt-12 text-[24px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
                    >
                      {p.replace(/^##\s+/, "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f] mt-6 first:mt-0"
                  >
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Worked example */}
            <section className="mt-12 rounded-[22px] bg-[#0a1226] text-white p-8">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/70">
                Worked example
              </h2>
              <p className="mt-4 text-[16px] leading-[1.5] tracking-[-0.014em] text-white/95">
                {entry.example}
              </p>
            </section>

            {/* Misconceptions */}
            {entry.misconceptions.length > 0 && (
              <section className="mt-12">
                <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
                  Common misconceptions
                </h2>
                <ul className="mt-4 space-y-3">
                  {entry.misconceptions.map((m, i) => (
                    <li
                      key={i}
                      className="text-[15px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f] pl-5 relative"
                    >
                      <span
                        className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                        aria-hidden="true"
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            <section className="mt-12 pt-10 border-t border-[color:var(--divider)]">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
                Frequently asked
              </h2>
              <dl className="mt-6 divide-y divide-[color:var(--divider)]">
                {entry.faq.map((f, i) => (
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

            {/* Sources */}
            <section className="mt-12 pt-10 border-t border-[color:var(--divider)]">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
                Sources
              </h2>
              <ol className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[#86868b]">
                {entry.sources.map((s, i) => (
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

            {/* Related */}
            <section className="mt-12 pt-10 border-t border-[color:var(--divider)]">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
                Related
              </h2>

              {relatedTerms.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">Sibling terms</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {relatedTerms.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/glossary/${t.slug}`}
                          className="inline-block rounded-full bg-[#f5f5f7] hover:bg-[#ececef] transition-colors px-3 py-1.5 text-[13px] tracking-[-0.014em] text-[#1d1d1f]"
                        >
                          {t.term}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedMarkets.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">Markets</h3>
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

              {relatedInsights.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">Insights</h3>
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
                            {i.date}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* CTA */}
            <div className="mt-14 pt-10 border-t border-[color:var(--divider)]">
              <p className="text-[14px] tracking-[-0.014em] text-[#86868b]">
                Want a confidential walk-through of {entry.term} on a specific asset?
              </p>
              <div className="mt-4">
                <Pill variant="primary" href="/contact">
                  Talk to us
                </Pill>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
