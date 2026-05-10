import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import type { Insight } from "@/lib/data/insights";

const kindLabel: Record<Insight["kind"], string> = {
  outlook: "Outlook",
  "white-paper": "White Paper",
  briefing: "Briefing",
};

export interface InsightsHeroProps {
  featured: Insight;
}

export function InsightsHero({ featured }: InsightsHeroProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Market Intelligence</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="Quarterly outlooks, in plain English."
            follow="Cap rates, ADR, and what we're seeing on the ground."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <article className="mt-16 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[28px] bg-[#f5f5f7]">
            <div className="p-6 sm:p-8 lg:p-14 flex flex-col">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em]">
                <span className="rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] px-2.5 py-1 font-medium">
                  {kindLabel[featured.kind]}
                </span>
                <span className="text-[#86868b]">{featured.date}</span>
              </div>

              <h3 className="mt-6 text-[clamp(28px,3vw,40px)] font-semibold leading-[1.1] tracking-[-0.012em] text-[#1d1d1f]">
                {featured.title}
              </h3>
              <p className="mt-4 text-[19px] leading-[1.42] tracking-[0.012em] text-[#86868b]">
                {featured.subtitle}
              </p>

              <p className="mt-6 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
                {featured.excerpt}
              </p>

              <div className="mt-auto pt-10 flex flex-wrap items-center gap-3">
                <Pill variant="primary" href={`/insights/${featured.slug}`}>
                  Read the report
                </Pill>
                {featured.downloadHref && (
                  <a
                    href={featured.downloadHref}
                    className="inline-flex min-h-[44px] items-center px-2 -mx-2 text-[15px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                  >
                    Download PDF
                  </a>
                )}
              </div>
            </div>

            <div
              className={`hidden lg:block aspect-auto bg-gradient-to-br ${featured.cover}`}
              aria-hidden="true"
            />
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default InsightsHero;
