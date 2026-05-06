import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import type { Listing } from "@/lib/data/listings";

export interface ListingNarrativeProps {
  listing: Listing;
}

/**
 * Splits a bullet line on its first sentence-ending phrase ("Foo. Bar Baz.")
 * into a {head, tail} pair so we can render the head bold and the tail muted.
 */
function splitBullet(text: string): { head: string; tail: string } {
  const idx = text.indexOf(".");
  if (idx === -1 || idx === text.length - 1) {
    return { head: text, tail: "" };
  }
  return {
    head: text.slice(0, idx + 1),
    tail: text.slice(idx + 1).trim(),
  };
}

export function ListingNarrative({ listing }: ListingNarrativeProps) {
  const paragraphs = listing.summary.split(/\n\n+/);

  return (
    <section aria-label="Opportunity overview" className="max-w-[58ch]">
      <Reveal>
        <Eyebrow>Opportunity Overview</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <TwoToneHeadline
          as="h2"
          size="subsection"
          lead="Position."
          follow="Why this asset, now."
        />
      </Reveal>

      <div className="mt-6 space-y-6 text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-primary)]">
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.05 + i * 0.05} as="p">
            {p}
          </Reveal>
        ))}
      </div>

      {listing.bullets.length > 0 && (
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {listing.bullets.map((b, i) => {
            const { head, tail } = splitBullet(b);
            return (
              <Reveal key={i} delay={0.1 + i * 0.05} as="li">
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]"
                  />
                  <p className="text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                    <span className="font-semibold text-[color:var(--text-primary)]">
                      {head}
                    </span>
                    {tail ? <> {tail}</> : null}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ListingNarrative;
