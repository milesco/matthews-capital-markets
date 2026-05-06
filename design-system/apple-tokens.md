# Apple Design Tokens

Extracted from observation + cross-reference of:
- https://www.apple.com/
- https://www.apple.com/iphone-17-pro/
- https://www.apple.com/macbook-pro/

Apple does not publish a token file for apple.com. The values below are the recurring values you will see by inspecting elements across those pages and Apple's `ac-globalnav` / `ac-localnav` / `typography-*` utility classes — captured at the level of fidelity a working web team can implement against. Where Apple uses fluid `clamp()` between breakpoints, the small/large endpoints are documented; where they use a fixed pixel value (e.g. body), it is documented as such.

For this project we substitute **Inter** (where Apple uses SF Pro Display/Text) and **Fraunces** (used as our editorial display contrast — Apple does not use a serif).

---

## 1. Font stack

```css
/* Apple */
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Arial", sans-serif;
font-family: "SF Pro Text",    -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Arial", sans-serif;

/* Our substitution (this project) */
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-display-serif: "Fraunces", ui-serif, Georgia, "Times New Roman", serif;
```

Apple's rule: `SF Pro Display` is used for type **≥ 20px**; `SF Pro Text` is used for type **< 20px**. With Inter (variable, single family) we don't need the swap, but we should still tighten letter-spacing on display sizes the way Apple does (Display is optically tighter than Text).

---

## 2. Typography scale

All values reflect the desktop endpoint of Apple's responsive ramp. The `clamp(min, fluid, max)` triplet is what Apple uses on hero/section sizes; below the small breakpoint they hold the min, above the large breakpoint they hold the max.

| Token | Size | Line height | Letter-spacing | Weight | Family | Apple usage |
|---|---|---|---|---|---|---|
| `display/xl`   (hero, MBP/iPhone hero) | `clamp(48px, 7vw, 96px)`  | 1.05 (`1.05`) | -0.015em (`-.015em`) | 600 | Display | "Hyper. Powerful. Pro." MBP hero |
| `display/lg`   (hero alt)              | `clamp(40px, 5.5vw, 80px)`| 1.0625        | -0.015em             | 600 | Display | iPhone 17 Pro hero |
| `display/md`   (subhero / large title) | `clamp(32px, 4vw, 64px)`  | 1.0625        | -0.012em             | 600 | Display | "A big zoom forward." |
| `headline/xl`  (section title)         | `clamp(32px, 3vw, 48px)`  | 1.08          | -0.003em             | 600 | Display | "Get to know iPhone 17 Pro." |
| `headline/lg`  (subsection title)      | `clamp(28px, 2.4vw, 40px)`| 1.1           | 0                    | 600 | Display | "Compare." section heads |
| `headline/md`  (card title)            | `24px`                    | 1.16667 (`1.1666666667`) | 0.009em (`.009em`) | 600 | Display | Tile titles, bento titles |
| `headline/sm`  (eyebrow / kicker)      | `21px`                    | 1.19048 (`1.1904761905`) | 0.011em (`.011em`) | 600 | Display | Bento tile headers |
| `title/lg`     (intro paragraph)       | `28px`                    | 1.14286 (`1.1428571429`) | 0.007em            | 400/500 | Display | "Built for Apple Intelligence." lead |
| `title/md`     (subtitle)              | `21px`                    | 1.19048      | 0.011em              | 400 | Display | Lead in cards |
| `body/lg`      (intro body)            | `19px`                    | 1.4211 (`1.4210526316`) | 0.012em (`.012em`) | 400 | Text | Lead body |
| **`body/base`** (Apple body baseline)  | **`17px`**                | **`1.47059` (≈ 1.47)** | **`-0.022em`**       | 400 | Text | Default body, paragraphs |
| `body/sm`      (small body)            | `14px`                    | 1.42857 (`1.4285714286`) | -0.016em (`-.016em`) | 400 | Text | Compact body, captions in cards |
| `caption/md`   (footnote)              | `12px`                    | 1.33333      | -0.01em              | 400 | Text | Disclosures, captions |
| `caption/sm`   (legal)                 | `11px`                    | 1.36364      | -0.005em             | 400 | Text | Footer legalese |

Notes (very Apple, easy to miss):
- **Body letter-spacing is negative** (`-0.022em`). Display sizes ≥ 32px also tighten (`-0.012em` to `-0.015em`).
- **Headlines around 21–24px use *positive* letter-spacing** (`0.009–0.011em`). This is a small but unmistakable Apple tell — bento tile titles look slightly opened-up.
- Hero line-heights are **near 1.05–1.07** (very tight).
- Body line-height is **1.47** — wider than the typical 1.5 web default.

### Tailwind shorthand

Add to `tailwind.config.ts`:

```ts
fontSize: {
  // [size, { lineHeight, letterSpacing }]
  "body":     ["17px", { lineHeight: "1.47",   letterSpacing: "-0.022em" }],
  "body-lg":  ["19px", { lineHeight: "1.421",  letterSpacing: "0.012em"  }],
  "body-sm":  ["14px", { lineHeight: "1.429",  letterSpacing: "-0.016em" }],
  "caption":  ["12px", { lineHeight: "1.333",  letterSpacing: "-0.01em"  }],
  "h-card":   ["24px", { lineHeight: "1.1667", letterSpacing: "0.009em"  }],
  "h-eyebrow":["21px", { lineHeight: "1.1905", letterSpacing: "0.011em"  }],
  "h-section":["clamp(28px, 2.4vw, 40px)", { lineHeight: "1.1",   letterSpacing: "0em"      }],
  "h-xl":     ["clamp(32px, 3vw,   48px)", { lineHeight: "1.08",  letterSpacing: "-0.003em" }],
  "d-md":     ["clamp(32px, 4vw,   64px)", { lineHeight: "1.0625",letterSpacing: "-0.012em" }],
  "d-lg":     ["clamp(40px, 5.5vw, 80px)", { lineHeight: "1.0625",letterSpacing: "-0.015em" }],
  "d-xl":     ["clamp(48px, 7vw,   96px)", { lineHeight: "1.05",  letterSpacing: "-0.015em" }],
}
```

---

## 3. Colors

All values match what apple.com renders today.

| Token | Hex | Usage |
|---|---|---|
| `text/primary`   | **`#1d1d1f`** | Headlines, body. Not pure black — never `#000` for text on light bg. |
| `text/secondary` | **`#86868b`** | Subtitle, captions, "lighter continuation" half of two-tone headlines, footer copy. |
| `text/tertiary`  | `#6e6e73`     | Footnotes inside dark sections (alt: `#a1a1a6` on dark bg). |
| `text/on-dark`   | `#f5f5f7`     | Body copy on black sections. |
| `text/on-dark-secondary` | `#a1a1a6` | Subtitle copy on black sections. |
| `surface/page`     | **`#ffffff`** | Default page background. |
| `surface/elevated` | **`#f5f5f7`** | "Light gray" alternate section. The Apple gray. Used for bento backgrounds, alt-row sections. |
| `surface/inverse`  | **`#000000`** | Pure black — used for hero/dramatic sections, header on scroll-into-dark, footer chrome. |
| `surface/footer`   | `#f5f5f7`     | Global footer matches `surface/elevated`. |
| `accent/blue`        | **`#0071e3`** | Primary CTA pill, all "Buy" buttons, "Learn more" links. |
| `accent/blue-hover`  | **`#0077ed`** | Pill hover state. |
| `accent/blue-active` | **`#006edb`** | Pill active/pressed state. |
| `accent/blue-link`   | `#2997ff`     | Link color when used on **black** sections (more luminous variant). |
| `border/divider`     | **`#d2d2d7`** | Hairline rules between sections, table dividers, input borders. |
| `border/divider-dark`| `#424245`     | Hairlines on black sections. |
| `success/green`      | `#30d158`     | "In stock", success ticks (Apple's iOS systemGreen). |
| `warning/amber`      | `#ff9f0a`     | Rare, used for badges. |
| `danger/red`         | `#ff3b30`     | Errors, "Sold out". |

CSS custom properties:

```css
:root {
  --color-text-primary: #1d1d1f;
  --color-text-secondary: #86868b;
  --color-text-tertiary: #6e6e73;
  --color-surface: #ffffff;
  --color-surface-elevated: #f5f5f7;
  --color-surface-inverse: #000000;
  --color-accent: #0071e3;
  --color-accent-hover: #0077ed;
  --color-accent-active: #006edb;
  --color-accent-on-dark: #2997ff;
  --color-divider: #d2d2d7;
  --color-divider-on-dark: #424245;
}
```

---

## 4. Spacing rhythm

### Container max-widths (Apple uses several)

| Token | Width | Where Apple uses it |
|---|---|---|
| `container/sm`  | `692px`  | Long-form copy blocks, legal pages |
| `container/md`  | `980px`  | The default apple.com content container — hero copy, bento grids on most product pages |
| `container/lg`  | `1024px` | Apple Store / shop containers |
| `container/xl`  | `1440px` | Hero imagery / video that wants to bleed wider on macbook-pro and iphone hero |
| `container/full`| `100%`   | Full-bleed video/photo backgrounds |

Implement as Tailwind:

```ts
maxWidth: {
  "container-sm": "692px",
  "container":    "980px",
  "container-lg": "1024px",
  "container-xl": "1440px",
}
```

### Section vertical rhythm

Apple's sections are taller than typical SaaS marketing. Pick a tier by the section's *importance*, not its *content height*.

| Tier | Padding (top & bottom) | Tailwind | When to use |
|---|---|---|---|
| compact   | `64px`  | `py-16` | Inline callouts, mid-section dividers, footnotes block |
| standard  | `80px`  | `py-20` | Default section spacing on apple.com |
| roomy     | `96px`  | `py-24` | Most marketing sections on iphone-17-pro / macbook-pro |
| feature   | `120px` | `py-30` (`py-[120px]`) | Big featured sections — Apple Intelligence, Camera, Performance |
| hero      | `160px` | `py-40` | Hero bands, "ends caps" |

Vertical spacing **between** an `<h2>` and the body that follows: `24px` (`mt-6`). Between a body paragraph and the next subhead: `48px` (`mt-12`). Between a section's headline block and its grid: `64px` (`mt-16`).

### Card padding tiers

| Token | Value | Tailwind | When |
|---|---|---|---|
| `card/sm`  | `20px` | `p-5`  | Compact list items, table rows |
| `card/md`  | `24px` | `p-6`  | Default card padding |
| `card/lg`  | `28px` | `p-7`  | Bento tiles with single icon + title |
| `card/xl`  | `32px` | `p-8`  | Standard bento tile |
| `card/2xl` | `40px` | `p-10` | Hero card / bento tile with image inside |
| `card/3xl` | `56px` | `p-14` | Showcase tile with large supporting copy |

### Grid gaps

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `gap/xs` | `12px` | `gap-3`  | Inline pill rows, button groups |
| `gap/sm` | `16px` | `gap-4`  | Tight 2-up grids (e.g. spec rows) |
| `gap/md` | `20px` | `gap-5`  | Default bento gap on apple.com |
| `gap/lg` | `24px` | `gap-6`  | 3- and 4-up product grids |
| `gap/xl` | `32px` | `gap-8`  | Cross-section gap between hero + grid |

---

## 5. Border radii

Apple's bento system uses a small ladder of radii. Match the radius to the card's *size*, not its *role* — bigger card, bigger radius.

| Token | Value | Tailwind | When |
|---|---|---|---|
| `radius/xs`  | `8px`  | `rounded-lg`        | Inputs, badges, chips |
| `radius/sm`  | `12px` | `rounded-xl`        | Avatars, small inline cards |
| `radius/md`  | `18px` | `rounded-[18px]`    | **Default card radius** — the most-used Apple card corner |
| `radius/lg`  | `22px` | `rounded-[22px]`    | Mid-size bento tiles |
| `radius/xl`  | `28px` | `rounded-[28px]`    | Large bento tiles, hero cards |
| `radius/2xl` | `40px` | `rounded-[40px]`    | Showcase tiles with image inside |
| `radius/pill`| `9999px`| `rounded-full`     | All buttons (primary pill, secondary pill), tag chips, avatars |
| `radius/input`| `16px`| `rounded-2xl`       | Form inputs, search bar |

---

## 6. Shadows / elevation

Apple's cards rarely shout. Most "cards" on apple.com use **no box-shadow at all** — they're separated from the page by the gray surface (`#f5f5f7`) and their `border-radius`. Shadows show up on:
- product imagery floating over a colored background,
- popovers,
- the global nav when it's pinned over content.

| Token | CSS | Use |
|---|---|---|
| `shadow/none`   | `none` | Most bento tiles. |
| `shadow/xs`     | `0 1px 2px rgba(0,0,0,0.04)` | Hairline lift on inputs/menus. |
| `shadow/card`   | `0 1px 3px rgba(0,0,0,0.04), 0 4px 16px -8px rgba(0,0,0,0.08)` | Apple's signature card shadow — used when a card sits on `#ffffff`. |
| `shadow/card-hover` | `0 2px 6px rgba(0,0,0,0.06), 0 12px 32px -10px rgba(0,0,0,0.14)` | Hover lift for `shadow/card`. |
| `shadow/popover`| `0 8px 24px rgba(0,0,0,0.08), 0 24px 48px -16px rgba(0,0,0,0.16)` | Global nav dropdowns, search overlay. |
| `shadow/floating-product` | `0 60px 80px -40px rgba(0,0,0,0.30)` | Long, soft shadow under floating product images on dark sections. |

Hover lift transform for cards:
```css
transform: translateY(-2px);
transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1),
            box-shadow 500ms cubic-bezier(0.32, 0.72, 0, 1);
```

---

## 7. Section pattern catalog

### A. Light section (default)

```html
<section class="bg-white text-[#1d1d1f] py-24">
  <div class="mx-auto max-w-[980px] px-6">…</div>
</section>
```

### B. Light-gray section (Apple's `#f5f5f7`)

Used to break visual rhythm without going full dark. Bento grids commonly live here.

```html
<section class="bg-[#f5f5f7] text-[#1d1d1f] py-24">
  <div class="mx-auto max-w-[980px] px-6">…</div>
</section>
```

### C. Dark dramatic section (hero / "Pro" sections)

Pure black, with two soft radial-gradient spotlights that land roughly at 30%/30% and 70%/70% of the section. This is the iPhone 17 Pro / MacBook Pro hero band.

```html
<section class="relative overflow-hidden bg-black text-[#f5f5f7] py-40">
  <div
    aria-hidden
    class="pointer-events-none absolute inset-0 opacity-80"
    style="background:
      radial-gradient(1200px 600px at 30% 30%, rgba(70,90,160,0.35), transparent 60%),
      radial-gradient(900px 600px at 70% 70%,  rgba(150,80,160,0.25), transparent 60%);"
  ></div>
  <div class="relative mx-auto max-w-[1024px] px-6">…</div>
</section>
```

For warm hero variants (MacBook Pro Space Black), swap the two gradient stops to amber/copper: `rgba(180,120,60,0.30)` and `rgba(60,90,140,0.25)`.

### D. Two-tone "Bold lead. Lighter continuation." headline

The single most recognizable Apple typography pattern. Use any time you have a sentence-form headline.

```html
<h2 class="font-semibold text-[clamp(32px,4vw,64px)] leading-[1.0625] tracking-[-0.012em]">
  <span class="text-[#1d1d1f]">A big zoom forward.</span>
  <span class="text-[#86868b]">Up to 8x optical-quality.</span>
</h2>
```

Rules:
- Lead clause states the *what*; continuation states the *qualifier*.
- Both halves share the same font-size, weight, and letter-spacing — only color changes.
- Periods at the end of each clause. Apple is religious about this.
- On dark sections, swap to `text-white` + `text-[#a1a1a6]`.

### E. Bento card grid

Apple's bento is `grid-template-columns: repeat(12, 1fr)` with cards spanning 4, 6, 8, or 12 columns. Gap is `20px` (`gap-5`). Each tile uses `bg-white` (when section is `#f5f5f7`) or `bg-[#f5f5f7]` (when section is white) for separation. No box-shadow.

```html
<div class="grid grid-cols-12 gap-5">
  <article class="col-span-12 md:col-span-8 rounded-[28px] bg-white p-10">…</article>
  <article class="col-span-12 md:col-span-4 rounded-[28px] bg-white p-8">…</article>
  <article class="col-span-12 md:col-span-4 rounded-[28px] bg-white p-8">…</article>
  <article class="col-span-12 md:col-span-8 rounded-[28px] bg-white p-10">…</article>
</div>
```

### F. 4-up product card row

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- each: bg-white, rounded-[18px], p-6, image-on-top, two-tone title, blue chevron link -->
</div>
```

### G. 3-up highlight cards (icon + title + body)

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <article class="rounded-[22px] bg-[#f5f5f7] p-8">
    <div class="text-[#0071e3] mb-4"><!-- icon 28px --></div>
    <h3 class="text-[24px] font-semibold tracking-[0.009em] leading-[1.1667] text-[#1d1d1f]">…</h3>
    <p class="mt-3 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#86868b]">…</p>
  </article>
  …
</div>
```

### H. Hero + grid combo

A single feature spans the full container with a tall image, then a 2- or 3-up sub-grid below it. The hero card uses `radius/xl` (`28px`); the sub-grid uses `radius/md` (`18px`). The hero has `p-14` (or `p-[56px]`) interior; the sub-grid uses `p-8`.

---

## 8. Buttons / links

### Primary pill (the Apple "Buy" button)

```html
<a class="
  inline-flex items-center justify-center
  bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb]
  text-white text-[17px] leading-none
  px-[22px] py-[12px]
  rounded-full
  transition-colors duration-200
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071e3]
">Buy</a>
```

Min height: `36px`. Min width: none — pill hugs content.

### Secondary outlined pill

Same dimensions as primary, but:
```html
<a class="
  inline-flex items-center justify-center
  border border-[#0071e3] text-[#0071e3]
  hover:bg-[#0071e3] hover:text-white
  text-[17px] leading-none
  px-[22px] py-[12px]
  rounded-full
  transition-colors duration-200
">Learn more</a>
```

### Ghost link with chevron

```html
<a class="
  inline-flex items-center gap-1
  text-[17px] tracking-[-0.022em]
  text-[#0071e3] hover:underline
">
  Learn more
  <svg viewBox="0 0 14 14" class="w-3 h-3" aria-hidden="true">
    <path d="M5 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>
```

The chevron is a real `>` arrow — small, 11–12px, same color as text. Underline on hover (no chevron movement).

### Text link (inside body copy)

`text-[#0071e3]`, no underline by default, **underline on hover**. On dark sections use `text-[#2997ff]`.

---

## 9. Forms / inputs

| Property | Value |
|---|---|
| Background | `#ffffff` |
| Border | `1px solid #d2d2d7` |
| Border focus | `1px solid #0071e3` + 4px outer ring `rgba(0,113,227,0.20)` |
| Radius | `12px` (chips) or `16px` (full inputs) |
| Padding | `12px 16px` |
| Font | `body/base` (17px / 1.47 / -0.022em) |
| Placeholder | `#86868b` |

---

## 10. Header / global nav

- Height: `44px` desktop, `48px` mobile.
- Background when in light section: `rgba(255,255,255,0.72)` + `backdrop-filter: saturate(180%) blur(20px)`.
- Background when in dark section: `rgba(0,0,0,0.72)` + same blur.
- Logo and nav links: `12px`, weight 400, color `#1d1d1f` (or `#f5f5f7` on dark), hover opacity `0.8`.
- Hairline at bottom: `1px solid rgba(0,0,0,0.08)` (or `rgba(255,255,255,0.10)` on dark).

The nav background is **transparent at scrollY = 0** if the hero is dark; when scroll passes the hero, the blurred white pill kicks in. We translate this to "header gets `bg-white/72 backdrop-blur` once `window.scrollY > 80`".
