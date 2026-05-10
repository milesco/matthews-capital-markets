import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-20 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            as="h1"
            lead="Talk to us."
            follow="We respond within one business day."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[58ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
            Selling, acquiring, or sizing up a market. Pick the channel that
            fits and we&rsquo;ll route you to the right broker.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactHero;
