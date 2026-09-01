import QuoteForm from "@/components/QuoteForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { MailIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/order",
  title: "Start a Project — Tell Us What You're Building",
  description:
    "Start a project with CS Media Studios. 6-step brief: who you are, what you need, how much, when, and your project brief. We respond with a clear quotation.",
});

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a Project"
        title={
          <>
            Tell us what
            <br />
            you&apos;re building.
          </>
        }
        intro="Six quick steps — who you are, what you need, how much, when, and your brief. We review and respond with a clear quotation, usually within one business day."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="border border-line bg-paper-alt p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">What happens next?</p>
                  <ol className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
                    <li><span className="font-bold text-accent">01</span> You send the brief</li>
                    <li><span className="font-bold text-accent">02</span> We review & quote</li>
                    <li><span className="font-bold text-accent">03</span> You confirm & pay</li>
                    <li><span className="font-bold text-accent">04</span> We create</li>
                    <li><span className="font-bold text-accent">05</span> You approve</li>
                    <li><span className="font-bold text-accent">06</span> We deliver</li>
                  </ol>
                  <p className="mt-3 text-xs text-ink-muted">No obligation until you approve the quote. <a href="/how-it-works" className="text-accent underline underline-offset-2">How it works →</a></p>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <div className="border border-line bg-white p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">Prefer to talk?</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <PhoneIcon className="h-4 w-4 text-ink-muted" />
                      <a href={`tel:${site.phoneHref}`} className="font-medium hover:text-accent">{site.phone} — Call</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <WhatsAppIcon className="h-4 w-4 text-ink-muted" />
                      <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent">{site.whatsapp} — WhatsApp</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MailIcon className="h-4 w-4 text-ink-muted" />
                      <a href={`mailto:${site.email}`} className="font-medium hover:text-accent">{site.email}</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MailIcon className="h-4 w-4 text-ink-muted" />
                      <a href={`mailto:${site.emailAlt}`} className="font-medium hover:text-accent">{site.emailAlt}</a>
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="border border-amber-200 bg-amber-50 p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-amber-900">Printing & rush</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900/80">Printing is quoted separately. Same-day / rush available for additional fee depending on complexity.</p>
                </div>
              </Reveal>
            </aside>

            {/* Form */}
            <Reveal delay={80}>
              <div className="border border-line bg-white p-6 shadow-card md:p-8">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
