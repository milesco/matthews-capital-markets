"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { GhostLink } from "@/components/ui/GhostLink";
import { heroH1, heroBody, heroCta, ease } from "@/lib/motion";

export function HomeHero() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: gradient slowly scales up as the hero scrolls past.
  const gradientScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="dark-section relative overflow-hidden bg-[color:var(--surface-inverse)] text-[color:var(--text-on-dark)]"
    >
      {/* Three-tone ambient gradient, lobby-at-dusk composite. apple-tokens.md §7.C */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          scale: gradientScale,
          background:
            "radial-gradient(1200px 700px at 22% 18%, rgba(40,70,140,0.35), transparent 62%), radial-gradient(1100px 700px at 82% 22%, rgba(120,70,160,0.20), transparent 60%), radial-gradient(900px 600px at 50% 95%, rgba(180,120,60,0.10), transparent 65%)",
          transformOrigin: "center",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1024px] flex-col items-stretch justify-center px-6 py-32 lg:py-40">
        <div className="flex w-full flex-col">
          {/* Editorial wordmark above the eyebrow, magazine column header */}
          <motion.p
            {...heroBody}
            className="text-[14px] font-medium uppercase tracking-[0.4em] text-white/40"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Matthews
          </motion.p>

          <motion.p
            {...heroBody}
            className="mt-5 text-[12px] font-medium uppercase tracking-[0.22em] text-white/60"
          >
            Matthews Hotel Team
          </motion.p>

          <motion.div {...heroH1} className="mt-6">
            <TwoToneHeadline
              as="h1"
              size="hero"
              tone="dark"
              lead="Hospitality finance and sales."
              follow="Nationwide."
            />
          </motion.div>

          <motion.p
            {...heroBody}
            className="mt-6 max-w-[640px] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-on-dark-secondary)]"
          >
            Whether you want to finance a hotel purchase, refinance a property
            you own, or sell a hotel, we are here to help.
          </motion.p>

          <motion.dl
            {...heroBody}
            className="mt-10 grid max-w-[640px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2"
          >
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
                Capital Markets
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-[color:var(--text-on-dark-secondary)]">
                Loans from $5M, experience up to $200M, every chain scale.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
                Sales
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-[color:var(--text-on-dark-secondary)]">
                Dispositions from $2M, nationwide.
              </dd>
            </div>
          </motion.dl>

          <motion.div
            {...heroCta}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Pill variant="primary" href="/listings">
              View listings
            </Pill>
            <GhostLink href="/contact">Talk to us</GhostLink>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
              Response 24h
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue, thin vertical line, gentle drift */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: ease.standard }}
      >
        <span className="block h-6 w-px bg-white/30" />
      </motion.div>
    </section>
  );
}

export default HomeHero;
