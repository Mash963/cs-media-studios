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
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-paper/70">{intro}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/order" variant="paper" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                className="border-paper/30 text-paper hover:border-paper hover:bg-transparent hover:text-paper"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
