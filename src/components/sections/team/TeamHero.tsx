import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";

export function TeamHero() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Our Team</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            as="h1"
            size="section"
            lead="Three specialists."
            follow="One hospitality team."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-tertiary)]">
            Hospitality capital markets and investment sales, anchored in
            Austin and Denver with national investor reach. Pick the broker
            who fits your asset, sponsor profile, or capital question.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default TeamHero;
