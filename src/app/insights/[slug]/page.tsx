import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightLayout } from "@/components/sections/insight-detail/InsightLayout";
import { insights, getInsight } from "@/lib/data/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) {
    return { title: "Insight not found — Matthews Hotel Team" };
  }
  return {
    title: `${insight.title} — Matthews Hotel Team`,
    description: insight.subtitle,
  };
}

export default async function InsightDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <InsightLayout insight={insight} />
      </main>
      <SiteFooter />
    </>
  );
}
