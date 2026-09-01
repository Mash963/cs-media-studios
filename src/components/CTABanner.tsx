import Reveal from "./Reveal";
import { ButtonLink } from "./Button";

interface CTABannerProps {
  title?: string;
  intro?: string;
}

export default function CTABanner({
  title = "Ready to start a project?",
  intro = "Tell us what you need and we'll respond with a quotation.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute right-[-1vw] top-6 hidden lg:block" aria-hidden>
        <span className="font-display text-[10rem] font-extrabold leading-none tracking-tighter text-paper/[0.035]">CS</span>
      </div>
      <div className="pointer-events-none absolute inset-0 grain opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="label-studio text-gold">CS / Studio — Let&apos;s build</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/60">{intro}</p>
              <div className="mt-4 h-px w-12 bg-gold/30" aria-hidden />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/order" variant="paper" size="lg" className="btn-arrow btn-shimmer">
                Start a Project <span aria-hidden>→</span>
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                className="border-paper/20 bg-transparent text-paper hover:border-paper hover:bg-paper/5"
              >
                Contact Us <span aria-hidden>→</span>
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 flex items-center gap-3 border-t border-paper/10 pt-6">
          <span className="h-px w-6 bg-gold/20" aria-hidden />
          <span className="label-studio text-paper/30">CS / MADE IN SOUTH AFRICA — 2026 — One studio. Every format.</span>
        </div>
      </div>
    </section>
  );
}
