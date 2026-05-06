"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/listings";

export interface ListingGalleryProps {
  listing: Listing;
}

/**
 * Six placeholder gradient tiles (until photography lands). Click any tile
 * to open a full-screen black lightbox with prev/next/close.
 */
const GRADIENT_VARIANTS = [
  "from-[#0a1226] to-[#1a3a6b]",
  "from-[#0066cc] to-[#1a56db]",
  "from-[#0e1a34] to-[#1a3a6b]",
  "from-[#1d1d1f] to-[#2c2c2e]",
  "from-[#1a3a6b] to-[#0a1226]",
  "from-[#0a1226] to-[#0066cc]",
];

export function ListingGallery({ listing }: ListingGalleryProps) {
  // First three tiles use the listing photo (when available); the remaining
  // three stay as gradient placeholders captioned "Photo coming soon".
  const tiles = React.useMemo(
    () =>
      GRADIENT_VARIANTS.map((tone, i) => ({
        id: i,
        tone,
        firstTile: i === 0,
        usePhoto: i < 3 && Boolean(listing.photo),
      })),
    [listing.photo],
  );

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const reduce = useReducedMotion();

  const open = openIndex !== null;
  const total = tiles.length;

  const close = React.useCallback(() => setOpenIndex(null), []);
  const next = React.useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % total)),
    [total],
  );
  const prev = React.useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + total) % total)),
    [total],
  );

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  // Lock body scroll when lightbox open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section aria-label="Photo gallery" className="mt-16 lg:mt-20">
      <Eyebrow>Gallery</Eyebrow>
      <TwoToneHeadline
        as="h2"
        size="subsection"
        lead="See the asset."
        follow={`${listing.photoCount} photos · gallery launching soon.`}
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            type="button"
            onClick={() => setOpenIndex(tile.id)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            aria-label={`Open photo ${tile.id + 1} of ${total}`}
          >
            {tile.usePhoto ? (
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]">
                <Image
                  src={listing.photo}
                  alt={`${listing.name} — photo ${tile.id + 1}`}
                  fill
                  quality={86}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    "object-cover",
                    tile.id === 1 && "object-top",
                    tile.id === 2 && "object-bottom",
                  )}
                />
              </div>
            ) : (
              <>
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]",
                    tile.firstTile ? listing.toneClass : tile.tone,
                  )}
                  aria-hidden="true"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/40 backdrop-blur px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] font-medium text-white">
                  Photo coming soon
                </span>
              </>
            )}
            <span className="absolute bottom-3 right-3 rounded-full bg-black/40 backdrop-blur px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] font-medium text-white">
              {tile.id + 1} / {total}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-4 text-[12px] tracking-[-0.01em] text-[color:var(--text-secondary)]">
        {listing.photoCount} photos available — full gallery shipping with the
        OM.
      </p>

      <AnimatePresence>
        {open && openIndex !== null && (
          <motion.div
            key="lightbox"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: ease.standard }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo viewer"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous photo"
            >
              <ChevronLeft
                className="h-6 w-6"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>

            {/* Center tile */}
            <motion.div
              key={openIndex}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: ease.standard }}
              className={cn(
                "relative aspect-[4/3] w-[min(90vw,1200px)] max-h-[80vh] overflow-hidden rounded-[18px]",
                !tiles[openIndex].usePhoto && "bg-gradient-to-br",
                !tiles[openIndex].usePhoto &&
                  (tiles[openIndex].firstTile
                    ? listing.toneClass
                    : tiles[openIndex].tone),
              )}
            >
              {tiles[openIndex].usePhoto && (
                <Image
                  src={listing.photo}
                  alt={`${listing.name} — photo ${openIndex + 1}`}
                  fill
                  quality={92}
                  sizes="90vw"
                  className={cn(
                    "object-cover",
                    openIndex === 1 && "object-top",
                    openIndex === 2 && "object-bottom",
                  )}
                />
              )}
              <span className="absolute bottom-4 right-4 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[12px] uppercase tracking-[0.18em] font-medium text-white">
                {openIndex + 1} / {total}
              </span>
            </motion.div>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              className="absolute right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next photo"
            >
              <ChevronRight
                className="h-6 w-6"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ListingGallery;
