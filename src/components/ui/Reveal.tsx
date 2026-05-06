"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Reveal wraps children with a fade-up entrance animation.
 *
 * Critical: SSR ships content fully visible (opacity:1, no transform). The
 * animation only attaches after client-side hydration, and only if the
 * element hasn't already been seen. This means:
 *   - SSR / no-JS / screenshot tools / a11y crawlers see content immediately
 *   - Reduced-motion users see content immediately (no animation)
 *   - Normal users get the fade-up as a progressive enhancement
 *
 * The bug we're fixing: `initial={{ opacity: 0 }}` was making content
 * invisible until IntersectionObserver fired. If the observer didn't fire
 * (programmatic scroll, screenshot capture, fast page jumps), content
 * stayed at opacity 0 forever.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  // Reduced motion or SSR / pre-hydration: render content fully visible.
  // No motion wrapper, no opacity gate.
  if (reduce || !hydrated) {
    const Tag = as as React.ElementType;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  const MotionTag = (motion as unknown as Record<string, React.ElementType>)[
    as as string
  ] ?? motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={{ ...fadeUp.transition, delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
