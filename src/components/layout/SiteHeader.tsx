"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/listings", label: "Listings" },
  { href: "/closed", label: "Closed" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/#offices", label: "Offices" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on viewport resize to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const frosted = scrolled || open;
  const textColor = frosted ? "text-[color:var(--text-primary)]" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        frosted
          ? "bg-white/72 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
          : "bg-transparent border-b border-transparent",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
    >
      <div className="mx-auto max-w-[1024px] px-6">
        <div
          className={cn(
            "flex items-center justify-between h-12 md:h-11",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-[15px] font-semibold tracking-[-0.014em] transition-colors duration-300",
              textColor,
            )}
          >
            Matthews
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] tracking-[-0.01em] transition-colors duration-300 hover:opacity-80",
                  textColor,
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: pill + mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Pill variant="primary" size="sm" href="/contact">
                Get in touch
              </Pill>
            </div>
            <button
              type="button"
              className={cn(
                "md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full transition-colors duration-300",
                textColor,
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: ease.standard }}
            className="md:hidden bg-white/95 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
          >
            <div className="mx-auto max-w-[1024px] px-6 py-4">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-[17px] text-[color:var(--text-primary)] border-b border-[color:var(--divider)] last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <Pill variant="primary" size="default" href="/contact" className="w-full">
                  Get in touch
                </Pill>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SiteHeader;
