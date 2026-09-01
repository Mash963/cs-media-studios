"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDarkHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isDarkHero
          ? "border-paper/10 bg-transparent"
          : scrolled || open
            ? "border-line bg-paper/95 backdrop-blur"
            : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 leading-none"
          aria-label={`${site.name} — home`}
        >
          <span className={cn("flex h-9 w-9 items-center justify-center font-display text-sm font-extrabold tracking-widest transition-colors", isDarkHero ? "bg-paper text-ink" : "bg-ink text-paper")}>
            CS
          </span>
          <span className="flex flex-col">
            <span className={cn("font-display text-[15px] font-bold tracking-tight transition-colors", isDarkHero ? "text-paper" : "text-ink")}>
              {site.name}
            </span>
            <span className={cn("hidden text-[9px] font-medium uppercase tracking-[0.18em] sm:block", isDarkHero ? "text-paper/50" : "text-ink-muted")}>
              {site.legalName}
            </span>
          </span>
          <span className={cn("ml-1 hidden border-l pl-3 font-display text-[10px] font-semibold uppercase tracking-[0.18em] md:block", isDarkHero ? "border-paper/15 text-gold" : "border-line text-gold-deep")}>
            CS / 001 — 2026
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative font-display text-sm font-medium transition-colors",
                  isDarkHero
                    ? active ? "text-paper" : "text-paper/60 hover:text-paper"
                    : active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {item.label}
                <span className={cn("pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100", active && "scale-x-100")} aria-hidden />
              </Link>
            );
          })}
          <ButtonLink href="/order" size="md" variant={isDarkHero ? "paper" : "primary"} className={isDarkHero ? "btn-shimmer" : ""}>
            Start a Project <span aria-hidden>→</span>
          </ButtonLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn("inline-flex h-11 w-11 items-center justify-center lg:hidden", isDarkHero ? "text-paper" : "text-ink")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 bg-current transition-all",
                open && "top-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-6 bg-current transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-6 bg-current transition-all",
                open && "top-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          open
            ? "block border-t border-line bg-paper"
            : "hidden"
        )}
      >
        <nav className="mx-auto max-w-6xl space-y-1 px-5 py-6" aria-label="Mobile">
          {[...nav, { label: "Start a Project", href: "/order" }].map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between border-b border-line/60 py-3 font-display text-lg font-medium",
                  active ? "text-gold-deep" : "text-ink"
                )}
              >
                <span className="flex items-center gap-3">{item.label} <span className="h-px w-4 bg-gold/30" aria-hidden /></span>
                <span aria-hidden className="label-studio text-ink-muted">
                  0{i + 1}
                </span>
              </Link>
            );
          })}
          <div className="pt-4">
            <ButtonLink href="/order" className="w-full btn-shimmer" size="lg">
              Start a Project <span aria-hidden>→</span>
            </ButtonLink>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={`tel:${site.phoneHref}`} className="font-medium text-ink underline decoration-gold/30 underline-offset-4 hover:decoration-gold">
                Call {site.phone}
              </a>
              <span className="text-ink-muted">·</span>
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-gold/30 underline-offset-4 hover:decoration-gold">
                WhatsApp
              </a>
            </div>
            <p className="mt-3 label-studio text-ink-muted/60">CS / MADE IN SOUTH AFRICA — 2026</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
