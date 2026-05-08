import * as React from "react";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

export interface PosterCTAProps {
  /** Lead headline (white, bold). Defaults to "Considering a sale?" */
  lead?: string;
  /** Follow headline (muted gray). Defaults to "Start the 24-week clock." */
  follow?: string;
  /** Primary action label. */
  ctaLabel?: string;
  /** Primary action href. */
  ctaHref?: string;
}

/**
 * PosterCTA
 * ---------
 * Editorial closer — full-bleed dark backdrop, hero-scale typography,
 * single primary action. Used at the bottom of /closed, /listings, and
 * /process to give every page editorial weight at the close. Same
 * pattern as Apple/Framer flagship pages — repetition is the brand.
 *
 * No supporting body copy by default. The headline IS the message.
 */
export function PosterCTA({
  lead = "Considering a sale?",
  follow = "Start the 24-week conversation.",
  ctaLabel = "Request a confidential valuation",
  ctaHref = "/contact",
}: PosterCTAProps) {
  return (
    <section className="dark-section relative overflow-hidden bg-black py-32 lg:py-48">
      {/* Subtle radial spotlight — keeps the field from going flat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(900px 600px at 50% 60%, rgba(26, 58, 107,0.18), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 text-center">
        <Reveal>
          <TwoToneHeadline
            as="h2"
            size="hero"
            tone="dark"
            lead={lead}
            follow={follow}
          />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-12 inline-flex items-center justify-center">
            <Pill variant="primary" size="default" href={ctaHref}>
              {ctaLabel}
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PosterCTA;
