export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  featured?: boolean;
}

// ── Graphic Design ─────────────────────────────────────────
export const designTiers: PricingTier[] = [
  {
    id: "essential",
    name: "Essential Poster",
    price: "R550",
    description: "Simple informational poster.",
    features: [
      "One defined design concept",
      "Professional layout & typography",
      "Up to 2 reasonable revision rounds",
      "Print/digital file preparation",
    ],
  },
  {
    id: "campaign",
    name: "Campaign Poster",
    price: "R800",
    description: "Professional custom campaign / event poster.",
    features: [
      "One defined design concept",
      "Image placement & colour treatment",
      "Branding applied",
      "Print/digital preparation",
      "Up to 2 reasonable revision rounds",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium Poster",
    price: "R1,275",
    description: "Advanced composition, image treatment and detailed design.",
    features: [
      "Advanced composition & image treatment",
      "Detailed typography & colour",
      "Multi-format preparation",
      "Up to 2 reasonable revision rounds",
    ],
  },
  {
    id: "executive",
    name: "Executive Campaign Creative",
    price: "FROM R1,700",
    description: "High-priority or complex political / campaign creative.",
    features: [
      "High-priority / complex creative",
      "Multi-format preparation",
      "Up to 2 reasonable revision rounds",
      "Priority turnaround",
    ],
  },
  {
    id: "custom-campaign",
    name: "Custom Campaign",
    price: "Quote",
    description:
      "For large-volume orders, multiple designs, campaign systems and ongoing creative support.",
    features: [
      "Bespoke multi-design scope",
      "Campaign visual systems",
      "Volume & complexity pricing",
      "Ongoing creative support",
    ],
  },
];

// Legacy alias so existing pages keep working
export const pricingTiers = designTiers;

// ── Video ──────────────────────────────────────────────────
export const videoTiers: PricingTier[] = [
  { id: "social-video", name: "Social Video", price: "FROM R350", description: "Short social edit.", features: ["Social-ready edit", "Colour & audio sync", "Up to 2 revision rounds"] },
  { id: "campaign-video", name: "Campaign / Event Video", price: "FROM R750", description: "Campaign or event video.", features: ["Edited to brief", "Colour correction", "Audio synchronisation", "Up to 2 revision rounds"] },
  { id: "premium-video", name: "Premium Video Edit", price: "FROM R1,500", description: "Premium edit with detailed treatment.", features: ["Advanced edit", "Colour grade", "Audio mix", "Up to 2 revision rounds"] },
  { id: "campaign-video-package", name: "Campaign Video Package", price: "FROM R2,500", description: "Multi-video campaign package.", features: ["Multiple deliverables", "Campaign-consistent treatment", "Priority turnaround", "Up to 2 revision rounds"] },
];

// ── Photo ──────────────────────────────────────────────────
export const photoTiers: PricingTier[] = [
  { id: "basic-photo", name: "Basic Photo Enhancement", price: "FROM R150", priceNote: "/ image", description: "Clean-up and enhancement.", features: ["Exposure & colour correction", "Light cleanup"] },
  { id: "pro-retouch", name: "Professional Retouch", price: "FROM R300", priceNote: "/ image", description: "Detailed portrait retouch.", features: ["Portrait retouching", "Background cleanup", "Campaign-ready output"] },
  { id: "advanced-photo", name: "Advanced Photo Editing", price: "FROM R500+", priceNote: "/ image", description: "Complex manipulation & restoration.", features: ["Background replacement", "Object removal", "Creative manipulation", "Restoration"] },
];

// ── Motion ─────────────────────────────────────────────────
export const motionTiers: PricingTier[] = [
  { id: "animated-poster", name: "Animated Poster", price: "FROM R500", description: "Your poster, in motion.", features: ["Poster-to-motion conversion", "Social-ready output", "Up to 2 revision rounds"] },
  { id: "motion-campaign", name: "Motion Campaign Graphic", price: "FROM R800", description: "Animated campaign graphic.", features: ["Campaign-consistent motion", "Typography animation", "Up to 2 revision rounds"] },
  { id: "premium-motion", name: "Premium Motion Creative", price: "FROM R1,500+", description: "Premium motion with advanced treatment.", features: ["Advanced composition", "Logo / intro animation", "Premium output"] },
];

// ── Volume discounts (design) ──────────────────────────────
export interface VolumeTier {
  id: string;
  label: string;
  discount: string;
  description: string;
}
export const volumeTiers: VolumeTier[] = [
  { id: "v1-9", label: "1 – 9 Designs", discount: "Standard pricing", description: "Standard per-design pricing applies." },
  { id: "v10-24", label: "10 – 24 Designs", discount: "10% OFF", description: "10% off qualifying design fees." },
  { id: "v25-49", label: "25 – 49 Designs", discount: "15% OFF", description: "15% off qualifying design fees." },
  { id: "v50+", label: "50+ Designs", discount: "25% OFF", description: "25% off qualifying design fees." },
];

export const volumeExclusions = [
  "Printing",
  "Photography",
  "Stock assets",
  "Paid fonts",
  "Third-party services",
  "Rush charges",
  "External production costs",
];

// ── Social Media Packages ──────────────────────────────────
export interface SocialPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}
export const socialPackages: SocialPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "R2,500",
    period: "/ month",
    features: ["5 designs", "2 photo enhancements", "1 short video"],
  },
  {
    id: "campaign-social",
    name: "Campaign",
    price: "R5,000",
    period: "/ month",
    features: ["10 designs", "5 photo enhancements", "3 short videos"],
    featured: true,
  },
  {
    id: "full-media",
    name: "Full Media",
    price: "FROM R8,500",
    period: "/ month",
    features: ["20 designs", "10 photo enhancements", "5 videos", "Motion graphics", "Campaign adaptations"],
  },
];

// ── What's included ────────────────────────────────────────
export const included = [
  { title: "Professional layout", description: "A composition built on strong hierarchy and spacing." },
  { title: "Typography", description: "Type that is legible, appropriate and considered." },
  { title: "Image placement", description: "Images handled with care, crop and treatment." },
  { title: "Branding", description: "Colour and identity applied consistently." },
  { title: "Colour treatment", description: "A controlled, deliberate colour direction." },
  { title: "Print / digital preparation", description: "Files prepared for the formats you need." },
  { title: "One defined design concept", description: "A single, focused direction taken seriously." },
  { title: "Up to 2 revision rounds", description: "Two reasonable revision rounds within scope." },
];

export const printFormats = [
  { code: "A4", size: "210 × 297 mm" },
  { code: "A3", size: "297 × 420 mm" },
  { code: "A2", size: "420 × 594 mm" },
  { code: "A1", size: "594 × 841 mm" },
  { code: "A0", size: "841 × 1189 mm" },
];

export const digitalFormats = [
  { code: "1080 × 1350", size: "Square / feed" },
  { code: "1080 × 1920", size: "Story / status" },
  { code: "1920 × 1080", size: "Widescreen / video" },
];
