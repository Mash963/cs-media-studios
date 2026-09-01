import PageHero from "@/components/PageHero";
import FaqAccordion from "./FaqAccordion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/faq",
  title: "FAQ",
  description:
    "Answers about ordering, pricing, revisions, delivery, ownership and our privacy practices.",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers to common
            <br />
            questions.
          </>
        }
        intro="Everything about ordering, pricing, revisions, ownership and how we work."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
