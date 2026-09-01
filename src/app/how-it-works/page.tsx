import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { ButtonLink } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/how-it-works",
  title: "How It Works — 6 Steps",
  description:
    "How CS Media Studios works: Brief → Quote → Confirm → Create → Approve → Deliver. Clear, honest, no surprises.",
});

const steps = [
  {
    n: "01",
    title: "Brief",
    subtitle: "Tell us what you're building",
    body: "Submit the project details through Start a Project. The more complete the brief — message, text, people to feature, formats, deadline — the better the first design.",
  },
  {
    n: "02",
    title: "Quote",
    subtitle: "We review the requirements",
    body: "We review scope, complexity, quantity and deadline and send a clear quotation. Volume, urgency and deliverables are factored in honestly. No hidden fees.",
  },
  {
    n: "03",
    title: "Confirm",
    subtitle: "Payment / deposit confirms production",
    body: "You approve the quote and make the required payment or deposit. Production is scheduled immediately once confirmed.",
  },
  {
    n: "04",
    title: "Create",
    subtitle: "The studio produces the agreed creative",
    body: "We produce the creative to the agreed brief — composition, typography, image treatment, branding and file preparation for print and digital.",
  },
  {
    n: "05",
    title: "Approve",
    subtitle: "Client reviews the agreed revisions",
    body: "You review the work. Up to 2 reasonable revision rounds are included per design within the agreed scope. Additional rounds or major changes are quoted separately.",
  },
  {
    n: "06",
    title: "Deliver",
    subtitle: "Final files are supplied",
    body: "Final files are delivered organised, print-ready and digital-clear — in the formats you requested. Campaign asset systems are delivered as a prepared library.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works — 6 Steps"
        title={
          <>
            A clear, simple
            <br />
            process.
          </>
        }
        intro="From brief to delivery in six straightforward steps. No confusion, no surprises — and responsibilities are shared honestly."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <ol className="relative space-y-0">
            {steps.map((step, i) => (
              <li key={step.n} className="relative pl-16 md:pl-28">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[26px] top-[56px] bottom-[-1.5rem] w-px bg-line md:left-[42px] md:top-[84px]"
                  />
                )}
                <Reveal delay={i * 60}>
                  <div className="relative pb-10 md:pb-12">
                    <span className="absolute -left-16 top-0 flex h-[52px] w-[52px] items-center justify-center border border-line bg-paper-alt font-display text-base font-bold text-accent md:-left-28 md:h-[84px] md:w-[84px] md:text-xl">
                      {step.n}
                    </span>
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">{step.subtitle}</p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-md text-pretty leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-12 border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-amber-900">Client responsibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
                You confirm you have permission to provide supplied photographs, logos, text and other assets, and you are responsible for factual accuracy of names, dates, political claims, contact information and event information. You must accept the Terms & Conditions and Privacy Policy before submitting.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="/order" size="md">Start a Project →</ButtonLink>
                <ButtonLink href="/terms" variant="secondary" size="md">Terms & Conditions</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Ready to begin?"
        intro="Submit the brief and we'll take it from there — clear quote first, no obligation until you approve."
      />
    </>
  );
}
