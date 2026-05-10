import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightLayout } from "@/components/sections/insight-detail/InsightLayout";
import { insights, getInsight } from "@/lib/data/insights";
import { team } from "@/lib/data/team";

const SITE_URL = "https://matthewshotelmarkets.com";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) {
    return { title: "Insight not found" };
  }

  const authorNames = insight.authorSlugs
    .map((s) => team.find((m) => m.slug === s)?.name)
    .filter((n): n is string => Boolean(n));
  const byline =
    authorNames.length > 0 ? authorNames.join(" and ") : "Matthews Hotel Team";

  const url = `${SITE_URL}/insights/${insight.slug}`;
  const description = `${insight.subtitle} ${insight.excerpt.slice(0, 100)}…`.slice(
    0,
    160,
  );

  return {
    title: insight.title,
    description,
    alternates: { canonical: url },
    authors: [{ name: byline }],
    openGraph: {
      type: "article",
      title: insight.title,
      description,
      url,
      publishedTime: insight.date,
      authors: authorNames.length ? authorNames : undefined,
      tags: insight.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description,
    },
  };
}

export default async function InsightDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const authors = insight.authorSlugs
    .map((s) => team.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const url = `${SITE_URL}/insights/${insight.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: insight.title,
        description: insight.subtitle,
        datePublished: insight.date,
        dateModified: insight.date,
        inLanguage: "en-US",
        author:
          authors.length > 0
            ? authors.map((a) => ({
                "@type": "Person",
                "@id": `${SITE_URL}/team/${a.slug}#person`,
                name: a.name,
                url: `${SITE_URL}/team/${a.slug}`,
              }))
            : { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: insight.tags.join(", "),
        image: `${url}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: `${SITE_URL}/insights`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: insight.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <InsightLayout insight={insight} />
      </main>
      <SiteFooter />
    </>
  );
}
