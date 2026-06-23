"use client";

import * as React from "react";
import Image from "next/image";
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
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="dark-section relative overflow-hidden bg-[color:var(--surface-inverse)] text-[color:var(--text-on-dark)]"
    >
      {/* Hero photograph backdrop with slow parallax zoom */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ scale: photoScale, transformOrigin: "center" }}
      >
        <Image
          src="/images/hero-landscape.jpg"
          alt=""
          fill
          quality={88}
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient washes for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(95deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 30%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.20) 90%, rgba(0,0,0,0.10) 100%), linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex min-h-[640px] max-w-[1024px] flex-col items-stretch justify-center px-6 py-20 md:min-h-screen md:py-32 lg:py-40"
        style={{ paddingBottom: "max(5rem, env(safe-area-inset-bottom) + 4rem)" }}
      >
        <div className="flex w-full flex-col">
          <motion.p
            {...heroBody}
            className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/70"
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
            className="mt-6 max-w-[640px] text-[17px] leading-[1.45] tracking-[0.012em] text-white/85 md:text-[19px] md:leading-[1.42] md:text-[color:var(--text-on-dark-secondary)]"
          >
            Whether you want to finance a hotel purchase, refinance a property
            you own, or sell a hotel, we are here to help.
          </motion.p>

          <motion.dl
            {...heroBody}
            className="mt-10 grid max-w-[640px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2"
          >
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Capital Markets
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-white/85 md:text-[color:var(--text-on-dark-secondary)]">
                Loans from $5M, experience up to $200M, every chain scale.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Sales
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-white/85 md:text-[color:var(--text-on-dark-secondary)]">
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
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
              Response 24h
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: ease.standard }}
      >
        <span className="block h-6 w-px bg-white/30" />
      </motion.div>
    </section>
  );
}

export default HomeHero;
