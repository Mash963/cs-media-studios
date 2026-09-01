export const site = {
  name: "CS Media Studios",
  legalName: "Conqueror Supreme Creative & Technology Studio",
  shortName: "CS",
  tagline: "ONE STUDIO. EVERY FORMAT.",
  subTagline: "CREATIVE. DIGITAL. TECHNOLOGY.",
  description:
    "CS Media Studios — Conqueror Supreme Creative & Technology Studio. A South African multimedia creative studio: Design, Photo, Video, Motion and Campaign Media. Evolving toward Web, Software, Automation and Technology.",
  email: "csupreme@gmail.com",
  emailAlt: "m4sh2@outlook.com",
  whatsapp: "069 312 1571",
  phone: "069 312 1571",
  phoneHref: "+27693121571",
  location: "South Africa",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
    whatsapp: "https://wa.me/27693121571",
  },
  url: "https://csmediastudios.co.za",
  currency: "ZAR",
} as const;

export const nav = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Keep old route working via redirect; canonical nav is above.
export const legacyNavAliases: Record<string, string> = {
  "/campaign-design": "/campaigns",
  "/how-it-works": "/how-it-works",
  "/order": "/order",
};
