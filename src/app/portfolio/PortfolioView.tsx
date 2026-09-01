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
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="flex flex-wrap gap-2 border-b border-line pb-6"
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 font-display text-sm font-medium transition-colors",
                  filter === cat
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:bg-paper-alt hover:text-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            {items.length} {items.length === 1 ? "project" : "projects"}
            {filter !== "All" && ` in ${filter}`}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group block cursor-pointer text-left"
                aria-label={`View ${item.title}`}
              >
                <PortfolioMedia src={item.image} alt={item.title} placeholder={item.placeholder} />
                <div className="pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {item.category}
                    </p>
                    {item.year && <span className="text-xs text-ink-muted">{item.year}</span>}
                  </div>
                  <h2 className="mt-1 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h2>
                </div>
              </button>
            ))}
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
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <PortfolioMedia
              src={lightbox.image}
              alt={lightbox.title}
              placeholder={lightbox.placeholder}
              aspect="aspect-[4/5] md:aspect-[3/4]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
            <div className="mt-6 border-t border-line bg-paper p-6 text-ink">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {lightbox.category}
                </p>
                {lightbox.year && <span className="text-xs text-ink-muted">{lightbox.year}</span>}
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold">{lightbox.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
