import PortfolioView from "./PortfolioView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/portfolio",
  title: "Portfolio",
  description:
    "Selected political, councillor, community, event, social media, large-format and motion design work from our studio.",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-40">
          <p className="mb-5 font-display text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Work that works in the world.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Selected examples across campaigns, candidates, community initiatives, events
            and digital formats. New work is added as projects are completed.
          </p>
        </div>
      </section>
      <PortfolioView />
    </>
  );
}
