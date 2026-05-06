"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { GhostLink } from "@/components/ui/GhostLink";
import { heroH1, heroBody, heroCta } from "@/lib/motion";

export function HomeHero() {
  return (
    <section
      className="dark-section relative overflow-hidden bg-[color:var(--surface-inverse)] text-[color:var(--text-on-dark)]"
    >
      {/* Two soft radial-gradient spotlights — apple-tokens.md §7.C */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(1200px 600px at 30% 30%, rgba(70,90,160,0.35), transparent 60%), radial-gradient(900px 600px at 70% 70%, rgba(150,80,160,0.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1024px] items-center px-6 py-32 lg:py-40">
        <div className="flex w-full flex-col">
          <motion.p
            {...heroBody}
            className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/60"
          >
            Matthews Hotel Team
          </motion.p>

          <motion.div {...heroH1} className="mt-6">
            <TwoToneHeadline
              as="h1"
              size="hero"
              tone="dark"
              lead="Hospitality investment sales."
              follow="Reimagined."
            />
          </motion.div>

          <motion.p
            {...heroBody}
            className="mt-6 max-w-[640px] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-on-dark-secondary)]"
          >
            National hotel investment sales backed by Matthews Real Estate
            Investment Services. 30+ offices, 1M+ investors, $84.3B closed.
          </motion.p>

          <motion.div
            {...heroCta}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Pill variant="primary" href="/listings">
              View listings
            </Pill>
            <GhostLink href="/contact">Talk to us</GhostLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
