/**
 * Motion tokens, Apple's signature decel curve runs almost everything.
 * See /design-system/motion-spec.md for the full spec.
 */

export const ease = {
  standard: [0.32, 0.72, 0, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
  out: [0, 0, 0.2, 1] as const,
  in: [0.4, 0, 1, 1] as const,
};

export const duration = {
  micro: 0.15,
  fast: 0.2,
  base: 0.3,
  card: 0.5,
  hero: 0.7,
  heroLg: 0.9,
  zoom: 0.7,
  counter: 1.2,
};

/* Drop-in props for the most common patterns */

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: duration.card, ease: ease.standard },
} as const;

export const fadeUpStaggered = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: duration.card, ease: ease.standard, delay: i * 0.05 },
});

export const heroH1 = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.heroLg, ease: ease.standard },
} as const;

export const heroBody = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.hero, ease: ease.standard, delay: 0.1 },
} as const;

export const heroCta = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.hero, ease: ease.standard, delay: 0.2 },
} as const;

export const cardHover = {
  whileHover: { y: -2, scale: 1.012 },
  transition: { duration: duration.card, ease: ease.standard },
} as const;
