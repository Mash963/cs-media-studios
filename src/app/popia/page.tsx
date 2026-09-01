import LegalPage from "@/components/LegalPage";
import { popiaSections } from "@/data/popia";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/popia",
  title: "POPIA / Privacy Notice",
  description:
    "Privacy notice issued in accordance with the Protection of Personal Information Act, 2013.",
});

export default function PopiaPage() {
  return (
    <LegalPage
      eyebrow="POPIA"
      title="POPIA / Privacy Notice"
      updated="2026"
      notice="This notice is provided in accordance with the Protection of Personal Information Act, 2013. It is not legal advice. Have it reviewed by a qualified South African legal professional before publication."
      sections={popiaSections}
    />
  );
}
