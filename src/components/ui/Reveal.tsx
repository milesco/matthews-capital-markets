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

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as as React.ElementType;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  // We use motion's `as` prop via the create call. Use a type-safe element name.
  // Default to motion.div but switch using motion[as].
  // motion is indexable by HTML tag name.
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
