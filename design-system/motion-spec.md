# Apple Motion Spec

The single thing that makes a marketing site feel like Apple's is *how it moves*. Apple's motion language has three rules:

1. **One easing curve does almost everything.** Mostly `cubic-bezier(0.32, 0.72, 0, 1)`. It's a *decel* curve — fast at the start, gentle settle. No bounce, no overshoot.
2. **Durations are longer than typical web.** Cards take `500ms`. Hero reveals take `700–900ms`. Nothing is `200ms` except color/state changes.
3. **Movements are tiny.** `y: 24px → 0`, `scale: 1 → 1.012`. Apple never moves an object 80px or scales it 1.2× — the motion is *barely there*, just enough to feel alive.

---

## Tokens

```ts
// motion.ts
export const ease = {
  standard: [0.32, 0.72, 0, 1] as const,        // Apple's signature decel
  in:       [0.4, 0, 1, 1] as const,             // accelerate-only (rare; only for exits)
  out:      [0, 0, 0.2, 1] as const,             // decelerate-only (alt)
  inOut:    [0.4, 0, 0.2, 1] as const,           // material-style; for state toggles
};

export const duration = {
  micro:  0.15,   // 150ms — color/opacity flips, focus rings
  fast:   0.2,    // 200ms — link hover, button bg
  base:   0.3,    // 300ms — small UI state, accordions
  card:   0.5,    // 500ms — fade-up of a card into view
  hero:   0.7,    // 700ms — hero copy reveal
  heroLg: 0.9,    // 900ms — hero image / video fade-in
  zoom:   0.7,    // 700ms — image hover micro-zoom
};
```

---

## Patterns

### A. Fade-up on scroll (default for everything in-view)

The single most-used Apple motion. Cards, headlines, body — everything gets a soft fade + small upward translation when it enters the viewport. Stagger by `index * 0.05` for grids.

```ts
import { motion } from "framer-motion";

const fadeUp = {
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: "-30px" },
  transition:{ duration: 0.5, ease: [0.32, 0.72, 0, 1] },
};

<motion.div {...fadeUp}>…</motion.div>

// Stagger for a grid:
{items.map((it, i) => (
  <motion.article
    key={it.id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: i * 0.05 }}
  >…</motion.article>
))}
```

### B. Hero reveal (slower, larger)

For the top-of-page H1 + sub-copy. Sequence: H1 fades up, body follows 100ms later, CTA follows another 100ms.

```ts
const heroH1 = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] },
};
const heroBody = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 },
};
const heroCta = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 },
};
```

### C. Card hover lift

Tiny scale + tiny translate + shadow upgrade. Never scale > 1.015.

```ts
const cardHover = {
  whileHover: { y: -2, scale: 1.012 },
  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
};
```

CSS-only equivalent (use this for non-motion components):

```css
.card {
  transition:
    transform 500ms cubic-bezier(0.32, 0.72, 0, 1),
    box-shadow 500ms cubic-bezier(0.32, 0.72, 0, 1);
}
.card:hover {
  transform: translateY(-2px) scale(1.012);
  box-shadow: 0 2px 6px rgba(0,0,0,0.06), 0 12px 32px -10px rgba(0,0,0,0.14);
}
```

### D. Image hover micro-zoom

When the user hovers a product/photo card, the image inside scales `1 → 1.04` over `700ms`. The card frame does NOT scale — the image scales *inside* an `overflow-hidden` frame.

```css
.image-frame { overflow: hidden; border-radius: 18px; }
.image-frame img {
  transition: transform 700ms cubic-bezier(0.32, 0.72, 0, 1);
  will-change: transform;
}
.image-frame:hover img { transform: scale(1.04); }
```

```ts
// Framer Motion equivalent
const imageZoom = {
  initial: { scale: 1 },
  whileHover: { scale: 1.04 },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
};
```

### E. Header backdrop-blur on scroll

The global nav is transparent over the hero, then becomes a frosted bar once you scroll past it. Cross-fade the background, **don't slide** the nav in.

```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 80);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

<header
  className={`
    fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300
    ${scrolled
      ? "bg-white/72 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
      : "bg-transparent"
    }
  `}
  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
>
  …
</header>
```

Duration: `300ms`. Easing: standard. The blur uses `backdrop-filter: saturate(180%) blur(20px)` — Apple oversaturates by 180% so colors behind feel richer through the glass.

### F. Button hover (color only, fast)

State changes are the *one* place Apple goes fast (200ms). No movement, just color.

```css
.btn-primary {
  background: #0071e3;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover  { background: #0077ed; }
.btn-primary:active { background: #006edb; }
```

### G. Underline-on-hover for links

```css
.text-link {
  color: #0071e3;
  text-decoration: none;
  transition: text-decoration-color 150ms ease;
}
.text-link:hover { text-decoration: underline; text-underline-offset: 3px; }
```

### H. Number/stat counter (when present)

Apple uses `tabular-nums` and animates the value with a 1.2s ease-out, **starting only when the number block enters the viewport**. Use Framer Motion `useInView` + `motion.span` with `animate` updating the displayed number.

```tsx
<motion.span
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
  className="tabular-nums"
>
  {value}
</motion.span>
```

### I. Page transition (Next.js)

Cross-fade between routes — no slide. Apple's site does this so subtly you barely notice; the previous page's content fades out at 200ms while the next one fades in at 300ms with a 50ms delay.

```tsx
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
>
  {children}
</motion.main>
```

---

## Reduced motion

Always honor `prefers-reduced-motion`. Wrap reveals so the *position* still ends correct (otherwise content stays at `y: 24` forever).

```tsx
import { useReducedMotion } from "framer-motion";

function Reveal({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

CSS fallback at the global level:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Quick reference card

| Pattern | Trigger | initial | target | duration | ease |
|---|---|---|---|---|---|
| Card fade-up   | in-view | `{ opacity: 0, y: 24 }` | `{ opacity: 1, y: 0 }`  | 500ms | standard |
| Hero H1        | mount   | `{ opacity: 0, y: 32 }` | `{ opacity: 1, y: 0 }`  | 900ms | standard |
| Hero body      | mount   | `{ opacity: 0, y: 24 }` | `{ opacity: 1, y: 0 }`  | 700ms (delay 100ms) | standard |
| Hero CTA       | mount   | `{ opacity: 0, y: 16 }` | `{ opacity: 1, y: 0 }`  | 700ms (delay 200ms) | standard |
| Card hover lift| hover   | `{ y: 0, scale: 1 }`    | `{ y: -2, scale: 1.012 }`| 500ms | standard |
| Image hover zoom| hover  | `{ scale: 1 }`          | `{ scale: 1.04 }`       | 700ms | standard |
| Header blur-in | scroll>80 | bg `transparent`     | bg `white/72 + blur`    | 300ms | standard |
| Button hover   | hover   | bg `#0071e3`            | bg `#0077ed`            | 200ms | inOut |
| Link underline | hover   | no underline            | underline 3px offset    | 150ms | linear |
| Stat counter   | in-view | `opacity 0`             | `opacity 1`, value→target| 1200ms| standard |
| Stagger child  | grid    | as parent               | as parent               | + `i*0.05`s delay | — |
