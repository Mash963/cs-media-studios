import LegalPage from "@/components/LegalPage";
import { privacySections } from "@/data/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "How this website collects, uses and protects your personal information.",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="2026"
      notice="This policy provides a professional template. It is not legal advice. Have it reviewed by a qualified South African legal professional before publication."
      sections={privacySections}
    />
  );
}
