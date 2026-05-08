import * as React from "react";
import { TrendingUp, Users, Network, Award } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";

type Benefit = {
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  titleLead: string;
  titleFollow: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    titleLead: "Market intelligence.",
    titleFollow: "Sharp.",
    body: "Proprietary research on supply, demand, ADR, and cap rates across 30+ markets. Sellers price with confidence. Buyers underwrite with conviction.",
  },
  {
    icon: Users,
    titleLead: "Investor reach.",
    titleFollow: "Deep.",
    body: "Over one million direct relationships. Family offices, REITs, PE, and institutional capital — the right buyer for every brand and class.",
  },
  {
    icon: Network,
    titleLead: "National platform.",
    titleFollow: "Local listening.",
    body: "30+ offices coast to coast. Off-market deals surface first when every sub-market has someone on the ground.",
  },
  {
    icon: Award,
    titleLead: "$84.3 billion closed.",
    titleFollow: "Across every class.",
    body: "Matthews has executed 33,500+ transactions across every CRE asset class. Hospitality clients tap a platform proven at every scale.",
  },
];

export function HomeWhy() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Why Matthews</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="Information, not just listings."
            follow="A platform built for hospitality."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.titleLead} delay={i * 0.05}>
                <article className="rounded-[22px] bg-[#f5f5f7] p-8 h-full">
                  <Icon
                    className="mb-5 h-10 w-10 text-[#1a3a6b]"
                    strokeWidth={1.75}
                    aria-hidden={true}
                  />
                  <h3 className="text-[28px] font-semibold tracking-[0.007em] leading-[1.15]">
                    <span className="text-[#1d1d1f]">{benefit.titleLead}</span>{" "}
                    <span className="text-[#86868b]">{benefit.titleFollow}</span>
                  </h3>
                  <p className="mt-3 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#86868b]">
                    {benefit.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeWhy;
