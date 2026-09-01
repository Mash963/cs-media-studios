import LegalPage from "@/components/LegalPage";
import { termsSections } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of this website and the provision of design services.",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="2026"
      notice="These terms provide a professional template. They are not legal advice. Have them reviewed by a qualified South African legal professional before publication."
      sections={termsSections}
    />
  );
}
