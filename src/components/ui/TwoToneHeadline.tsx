import * as React from "react";
import { cn } from "@/lib/utils";

type Size = "section" | "subsection" | "hero";
type AsTag = "h1" | "h2" | "h3";
type Tone = "light" | "dark";

export interface TwoToneHeadlineProps {
  lead: string;
  follow: string;
  size?: Size;
  as?: AsTag;
  tone?: Tone;
  className?: string;
}

const sizeClass: Record<Size, string> = {
  section:
    "font-semibold text-[clamp(32px,3vw,48px)] leading-[1.08] tracking-[-0.003em]",
  subsection:
    "font-semibold text-[clamp(28px,2.4vw,40px)] leading-[1.1] tracking-[0em]",
  // Hero scale ships at light weight. Luxury hospitality brands (Hunter,
  // Sotheby's, etc.) ship display type at 100-300 weights, never 600, thin
  // reads editorial and confident at 96px while bold reads tech-startup.
  // Slightly tighter tracking compensates for the reduced visual weight.
  // NOTE: globals.css h1-h6 { font-weight: 600 } is unlayered, so it would
  // beat the Tailwind `font-light` utility (cascade-layer ordering, unlayered
  // rules win over layered rules). Inline `!font-light` is the override.
  hero: "!font-light text-[clamp(48px,7vw,96px)] leading-[1.05] tracking-[-0.025em]",
};

export function TwoToneHeadline({
  lead,
  follow,
  size = "section",
  as = "h2",
  tone = "light",
  className,
}: TwoToneHeadlineProps) {
  const Tag = as as React.ElementType;

  const leadColor =
    tone === "dark" ? "text-white" : "text-[color:var(--text-primary)]";
  const followColor =
    tone === "dark"
      ? "text-[#a1a1a6]"
      : "text-[color:var(--text-secondary)]";

  return (
    <Tag className={cn(sizeClass[size], className)}>
      <span className={leadColor}>{lead}</span>{" "}
      <span className={followColor}>{follow}</span>
    </Tag>
  );
}

export default TwoToneHeadline;
