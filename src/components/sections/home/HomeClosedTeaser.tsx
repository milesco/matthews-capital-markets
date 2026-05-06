import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { GhostLink } from "@/components/ui/GhostLink";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function HomeClosedTeaser() {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <Reveal>
            <div>
              <Eyebrow>Track record</Eyebrow>
              <TwoToneHeadline
                size="section"
                lead="670+ closed."
                follow="Decades of trusted execution."
              />
              <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.47] tracking-[-0.022em] text-[#424245]">
                The Matthews hospitality team has executed across the full
                spectrum of hotel investment — select-service, full-service,
                resort, and lifestyle. Each transaction underwritten with deep
                market intelligence and closed with the conviction sellers and
                buyers expect from a platform proven at every scale.
              </p>
              <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                Recent ·{" "}
                <span className="text-[color:var(--text-secondary)] normal-case tracking-[-0.014em]">
                  The Westin Austin Downtown · $98.5M · Sale
                </span>
              </p>
              <div className="mt-8">
                <GhostLink href="/closed">Explore closed deals</GhostLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card
              variant="light"
              radius="xl"
              padding={5}
              className="overflow-hidden p-0 shadow-[0_2px_6px_rgba(0,0,0,0.06),0_24px_48px_-16px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
            >
              <div
                className="aspect-[5/4] w-full bg-gradient-to-br from-[#1d1d1f] to-[#3a3a3c]"
                aria-hidden="true"
              />
              <div className="p-7">
                <StatusBadge status="closed" size="sm" />
                <h3 className="mt-4 text-[24px] font-semibold tracking-[0.009em] leading-[1.1667] text-[#1d1d1f]">
                  The Driskill Trophy Lease Option
                </h3>
                <p className="mt-1 text-[13px] tracking-[-0.014em] text-[#86868b]">
                  Representative transaction
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-y-4 gap-x-6 border-t border-[color:var(--divider)] pt-6 text-[14px] tracking-[-0.016em]">
                  <div>
                    <dt className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                      City
                    </dt>
                    <dd className="mt-1 text-[#1d1d1f]">Austin, Texas</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                      Year
                    </dt>
                    <dd className="mt-1 text-[#1d1d1f] tabular-nums">2024</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                      Segment
                    </dt>
                    <dd className="mt-1 text-[#1d1d1f]">
                      Luxury · Independent
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                      Deal size
                    </dt>
                    <dd className="mt-1 text-[#1d1d1f] tabular-nums">$45M</dd>
                  </div>
                </dl>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HomeClosedTeaser;
