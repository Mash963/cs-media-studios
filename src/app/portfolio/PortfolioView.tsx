"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { portfolio, portfolioCategories, type PortfolioItem } from "@/data/portfolio";
import PortfolioMedia from "@/components/PortfolioMedia";
import { cn } from "@/lib/utils";

export default function PortfolioView() {
  const [filter, setFilter] = useState<(typeof portfolioCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const items = useMemo(
    () =>
      filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  return (
    <>
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          {/* Studio bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <p className="label-studio text-gold-deep">CS / Exhibition — Work that works in the world</p>
            <span className="label-studio text-ink-muted/60">Project 001 — {String(items.length).padStart(3,"0")} / CS Archive</span>
          </div>

          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="flex flex-wrap gap-2"
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.18em] transition-all",
                  filter === cat
                    ? "border-ink bg-ink text-paper shadow-card"
                    : "border-line bg-paper text-ink-muted hover:border-gold/30 hover:text-ink hover:bg-paper-alt"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-6 bg-gold/30" aria-hidden />
            <p className="label-studio text-ink-muted">
              {items.length} {items.length === 1 ? "project" : "projects"}
              {filter !== "All" && <span className="text-gold-deep"> — {filter}</span>}
              <span className="ml-2 text-ink-muted/50">— Exhibition view</span>
            </p>
          </div>

          {/* Exhibition grid — editorial, asymmetrical */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className={cn(
                  "group block cursor-pointer text-left card-lift border border-line bg-paper",
                  idx === 0 && items.length > 5 && "sm:col-span-2 lg:col-span-2 lg:row-span-1"
                )}
                aria-label={`View ${item.title}`}
              >
                <div className="img-zoom border-b border-line">
                  <PortfolioMedia
                    src={item.image}
                    alt={item.title}
                    placeholder={item.placeholder}
                    aspect={idx === 0 && items.length > 5 ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/5]"}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="label-studio text-gold-deep">
                      {item.category}
                    </p>
                    <span className="flex items-center gap-2">
                      {item.year && <span className="font-display text-xs text-ink-muted">{item.year}</span>}
                      <span className="flex h-6 w-6 items-center justify-center border border-line bg-paper-alt text-ink-muted transition-colors group-hover:border-gold/25 group-hover:bg-gold/10 group-hover:text-gold-deep">
                        <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
                      </span>
                    </span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold leading-tight text-ink group-hover:text-ink transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                  <div className="mt-3 h-px w-8 bg-gold/20 transition-all duration-500 group-hover:w-16 group-hover:bg-gold/40" aria-hidden />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 border-t border-line pt-6">
            <span className="h-px w-8 bg-gold/20" aria-hidden />
            <span className="label-studio text-ink-muted/40">CS / MADE IN SOUTH AFRICA — 2026 — Exhibition</span>
            <span className="h-px w-8 bg-gold/20" aria-hidden />
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-paper/20 bg-ink text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-paper/10 bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <PortfolioMedia
              src={lightbox.image}
              alt={lightbox.title}
              placeholder={lightbox.placeholder}
              aspect="aspect-[4/5] md:aspect-[3/4]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
            <div className="border-t border-paper/10 bg-paper p-6 text-ink">
              <div className="flex items-center justify-between gap-4">
                <p className="label-studio text-gold-deep">
                  {lightbox.category}
                </p>
                <span className="label-studio text-ink-muted/50">CS / Project — {lightbox.year}</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold">{lightbox.title}</h2>
              <div className="mt-3 h-px w-10 bg-gold/30" aria-hidden />
              <p className="mt-3 leading-relaxed text-ink-muted">{lightbox.description}</p>
              {lightbox.services && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {lightbox.services.map(s => (
                    <span key={s} className="border border-line bg-paper-alt px-2.5 py-1 text-xs text-ink-muted">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
