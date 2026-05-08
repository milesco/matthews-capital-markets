"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

export interface CounterProps {
  value: string;
  className?: string;
}

/**
 * Parses a value like "$3.5B", "670+", "1M+", "19,400" into prefix/number/suffix.
 * Used to ensure a single source of truth for the formatted output.
 */
function parseValue(raw: string): {
  prefix: string;
  numStr: string;
  num: number;
  decimals: number;
  hadCommas: boolean;
  suffix: string;
} {
  const match = raw.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", numStr: raw, num: 0, decimals: 0, hadCommas: false, suffix: "" };
  }
  const [, prefix, numStr, suffix] = match;
  const hadCommas = numStr.includes(",");
  const cleaned = numStr.replace(/,/g, "");
  const dotIdx = cleaned.indexOf(".");
  const decimals = dotIdx === -1 ? 0 : cleaned.length - dotIdx - 1;
  const num = parseFloat(cleaned);
  return { prefix, numStr, num, decimals, hadCommas, suffix };
}

function formatNumber(value: number, decimals: number, withCommas: boolean): string {
  if (decimals > 0) {
    const fixed = value.toFixed(decimals);
    if (!withCommas) return fixed;
    const [intPart, decPart] = fixed.split(".");
    return `${Number(intPart).toLocaleString("en-US")}.${decPart}`;
  }
  const rounded = Math.round(value);
  return withCommas ? rounded.toLocaleString("en-US") : String(rounded);
}

/**
 * Counter renders the target value from SSR (no zero flash) and applies a soft
 * opacity fade-in once the element enters the viewport. Apple's stat bands
 * actually use static numbers more often than count-up, we follow that.
 *
 * For users with reduced motion, the value renders fully visible from first
 * paint with no animation.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const parsed = React.useMemo(() => parseValue(value), [value]);

  const display = `${parsed.prefix}${formatNumber(parsed.num, parsed.decimals, parsed.hadCommas)}${parsed.suffix}`;

  // Reduced motion: render fully visible, no animation.
  if (reduce) {
    return (
      <span ref={ref} className={cn("tabular-nums", className)}>
        {display}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.6, ease: ease.standard }}
    >
      {display}
    </motion.span>
  );
}

export default Counter;
