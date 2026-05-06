"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { duration as motionDuration, ease } from "@/lib/motion";

export interface CounterProps {
  value: string;
  className?: string;
}

/**
 * Parses a value like "$3.5B", "670+", "1M+", "19,400" into:
 *  - prefix (non-numeric leading characters, e.g. "$")
 *  - number (the leading numeric portion, parsed as float — keeps the decimal)
 *  - suffix (everything after the number portion, e.g. "B", "+", "M+")
 *
 * The number is animated; prefix/suffix are preserved verbatim. Commas in the
 * source are kept by re-formatting integers; floats keep their original
 * decimal precision.
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
    return {
      prefix: "",
      numStr: raw,
      num: 0,
      decimals: 0,
      hadCommas: false,
      suffix: "",
    };
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

// Approximate Apple standard ease via cubic-bezier evaluation for a single t.
// We can't use the motion `animate()` function easily for raw numbers across
// versions, so we drive the value with rAF + the same cubic-bezier coefficients.
function bezier(t: number, p1x: number, p1y: number, p2x: number, p2y: number): number {
  // Solve for x(t) = target -> y(t). Approximate via Newton-Raphson.
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;

  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  const sampleX = (u: number) => ((ax * u + bx) * u + cx) * u;
  const sampleY = (u: number) => ((ay * u + by) * u + cy) * u;
  const sampleDX = (u: number) => (3 * ax * u + 2 * bx) * u + cx;

  // Newton iterations
  let u = t;
  for (let i = 0; i < 8; i += 1) {
    const x = sampleX(u) - t;
    const dx = sampleDX(u);
    if (Math.abs(dx) < 1e-6) break;
    u -= x / dx;
  }
  return sampleY(u);
}

export function Counter({ value, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-30px" });

  const parsed = React.useMemo(() => parseValue(value), [value]);

  const [display, setDisplay] = React.useState<string>(() => {
    if (reduce) {
      return `${parsed.prefix}${formatNumber(parsed.num, parsed.decimals, parsed.hadCommas)}${parsed.suffix}`;
    }
    return `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hadCommas)}${parsed.suffix}`;
  });

  React.useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setDisplay(
        `${parsed.prefix}${formatNumber(parsed.num, parsed.decimals, parsed.hadCommas)}${parsed.suffix}`,
      );
      return;
    }

    const totalMs = motionDuration.counter * 1000;
    const [p1x, p1y, p2x, p2y] = ease.standard;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / totalMs);
      const eased = bezier(t, p1x, p1y, p2x, p2y);
      const current = parsed.num * eased;
      setDisplay(
        `${parsed.prefix}${formatNumber(current, parsed.decimals, parsed.hadCommas)}${parsed.suffix}`,
      );
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, parsed]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}

export default Counter;
