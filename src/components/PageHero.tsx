import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <p className="mb-5 font-display text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={120}>
            <div className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
              {intro}
            </div>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
