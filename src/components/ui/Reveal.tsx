import * as React from "react";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Reveal is a pass-through. It used to gate content behind a fade-up animation
 * triggered by IntersectionObserver, but that pattern caused content to render
 * invisible whenever the observer didn't fire (programmatic scroll, screenshot
 * tools, A11y crawlers, hydration races). Apple's product pages don't actually
 * use viewport-triggered fades on every section, heroes get entrance
 * animations, sections render statically. We do the same.
 *
 * Kept as a component so existing imports across sections continue to work.
 * The `delay` prop is accepted for API compatibility and ignored.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: RevealProps) {
  const Tag = as as React.ElementType;
  return <Tag className={cn(className)}>{children}</Tag>;
}

export default Reveal;
