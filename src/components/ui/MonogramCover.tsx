import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MonogramCover
 * -------------
 * Editorial publication-quality monogram cover for broker tiles. Replaces the
 * "initials on colored gradient" Slack-style avatar with a typography-led
 * cover in the spirit of Apple's flagship tile aesthetic — a single Fraunces
 * mark on a flat tonal field, with restraint and confidence.
 *
 * Server component — pure JSX, no client state.
 */

export type MonogramTone = "ink" | "navy" | "graphite" | "paper";
export type MonogramSize = "card" | "hero";

export interface MonogramCoverProps {
  /** 1–3 character monogram (typically initials). */
  initials: string;
  /** Surface tone. Distribute across a roster so the grid doesn't read monotonous. */
  tone: MonogramTone;
  /**
   * `card`  — aspect-[3/4] cover sized for grid tiles.
   * `hero`  — aspect square cover sized for the team detail page (fills its
   *           parent; pair with an aspect-[3/4] container if desired).
   */
  size?: MonogramSize;
  /** Optional small label slot rendered below the monogram and rule. */
  children?: React.ReactNode;
  className?: string;
}

interface ToneSpec {
  bg: string;
  fg: string;
  /** Color of the thin rule beneath the monogram. */
  rule: string;
  /** Whether to render the subtle top-edge highlight overlay. */
  overlay: boolean;
}

const TONE_SPECS: Record<MonogramTone, ToneSpec> = {
  ink: {
    bg: "#0a0a0a",
    fg: "#ffffff",
    rule: "rgba(255,255,255,0.3)",
    overlay: true,
  },
  navy: {
    bg: "#0e1a34",
    fg: "#fafafa",
    rule: "rgba(250,250,250,0.3)",
    overlay: true,
  },
  graphite: {
    bg: "#1d1d1f",
    fg: "#f5f5f7",
    rule: "rgba(245,245,247,0.3)",
    overlay: true,
  },
  paper: {
    bg: "#fafafa",
    fg: "#0a0a0a",
    rule: "rgba(10,10,10,0.3)",
    overlay: false,
  },
};

export function MonogramCover({
  initials,
  tone,
  size = "card",
  children,
  className,
}: MonogramCoverProps) {
  const spec = TONE_SPECS[tone];
  const isHero = size === "hero";

  // Editorial cover-size scale. Card and hero use clamp() so the type breathes
  // across breakpoints without manual responsive variants.
  const monogramFontSize = isHero
    ? "clamp(160px, 20vw, 240px)"
    : "clamp(64px, 12vw, 120px)";

  // Card = 3/4 portrait with intrinsic aspect. Hero fills its parent (the
  // call site is expected to constrain dimensions, e.g. with aspect-[3/4]).
  const sizingClass = isHero ? "h-full w-full" : "w-full aspect-[3/4]";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        sizingClass,
        className,
      )}
      style={{ backgroundColor: spec.bg }}
      aria-hidden="true"
    >
      {/* Subtle top-edge highlight for paper-feel texture. Skipped on the
          paper tone (would invert weirdly on near-white). */}
      {spec.overlay && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[30%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0))",
          }}
        />
      )}

      {/* Editorial monogram block — vertically anchored to ~60% (slightly
          low, in the spirit of a magazine cover mark). */}
      <div
        className="absolute inset-x-0 flex flex-col items-center"
        style={{ top: "60%", transform: "translateY(-50%)" }}
      >
        <span
          className="font-[family-name:var(--font-fraunces)] leading-none"
          style={{
            color: spec.fg,
            fontSize: monogramFontSize,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            fontFeatureSettings: "normal",
          }}
        >
          {initials}
        </span>

        {/* Thin horizontal rule */}
        <div
          className="mt-6 h-px w-8"
          style={{ backgroundColor: spec.rule }}
        />

        {/* Optional caption slot — caller passes broker name/title or omits. */}
        {children ? (
          <div
            className="mt-3 px-4 text-center"
            style={{ color: spec.fg }}
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MonogramCover;
