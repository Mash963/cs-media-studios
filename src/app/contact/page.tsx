import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact — Let's Build Something",
  description:
    "Contact CS Media Studios — 069 312 1571 · csupreme@gmail.com · m4sh2@outlook.com · South Africa. Start a project or send a general enquiry.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build
            <br />
            something.
          </>
        }
        intro="For quotations use Start a Project. For general enquiries, use the details below."
      />

      {/* Big contact headline per spec 25 */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">Direct contact</p>
                <div className="mt-4 space-y-3">
                  <a href={`tel:${site.phoneHref}`} className="block font-display text-3xl font-bold tracking-tight hover:text-accent-ink sm:text-4xl">{site.phone}</a>
                  <a href={`mailto:${site.email}`} className="block font-display text-lg font-medium text-paper/80 hover:text-paper">{site.email}</a>
                  <a href={`mailto:${site.emailAlt}`} className="block font-display text-base text-paper/60 hover:text-paper">{site.emailAlt}</a>
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-paper/40">{site.location}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`tel:${site.phoneHref}`} variant="paper">Call →</ButtonLink>
                  <ButtonLink href={site.social.whatsapp} variant="paper">WhatsApp Us →</ButtonLink>
                </div>
              </div>
              <div className="border border-paper/15 bg-paper/5 p-6 backdrop-blur">
                <p className="font-display text-sm font-semibold text-paper">Fastest response</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">WhatsApp or Start a Project gets the quickest reply — usually within one business day. Email works too.</p>
                <div className="mt-6">
                  <ButtonLink href="/order" variant="paper" className="w-full justify-center">Start a Project →</ButtonLink>
                </div>
                <p className="mt-3 text-center font-display text-xs uppercase tracking-[0.18em] text-paper/40">Secure via Formspree · POPIA compliant</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
