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
  title: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Market intelligence.",
    body: "Proprietary research on supply, demand, ADR, and cap rates across 30+ markets. Sellers price with confidence. Buyers underwrite with conviction.",
  },
  {
    icon: Users,
    title: "Investor reach.",
    body: "Over one million direct relationships. Family offices, REITs, PE, and institutional capital. The right buyer for every brand and class.",
  },
  {
    icon: Network,
    title: "National platform.",
    body: "30+ offices coast to coast. Local intelligence with national reach. Off-market deals surface first when every sub-market has someone listening.",
  },
  {
    icon: Award,
    title: "$84.3 billion closed.",
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

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={i * 0.05}>
                <article className="rounded-[22px] bg-[#f5f5f7] p-8 h-full">
                  <Icon
                    className="mb-4 h-7 w-7 text-[#0071e3]"
                    strokeWidth={1.75}
                    aria-hidden={true}
                  />
                  <h3 className="text-[24px] font-semibold tracking-[0.009em] leading-[1.1667] text-[#1d1d1f]">
                    {benefit.title}
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
