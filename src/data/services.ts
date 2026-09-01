export interface ServiceDivision {
  id: string;
  label: string;
  title: string;
  status: "live" | "coming-soon" | "future";
  description: string;
  services: string[];
  cta: { label: string; href: string };
}

export interface Ecosystem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  divisions: ServiceDivision[];
}

// ── CREATIVE (live today) ──────────────────────────────────
export const creative: Ecosystem = {
  id: "creative",
  name: "CREATIVE",
  tagline: "Where ideas become visual presence.",
  description:
    "Our core studio today — Design, Photo, Video and Motion. Every brief is treated as a connected set of outputs, not isolated files.",
  divisions: [
    {
      id: "cs-design",
      label: "CS DESIGN",
      title: "Graphic & Campaign Design",
      status: "live",
      description:
        "Campaign-ready visual communication — built for streets, screens and print.",
      services: [
        "Political & candidate posters",
        "Ward campaign graphics",
        "Event posters & invitations",
        "Flyers & banners",
        "Social-media graphics",
        "Digital advertisements",
        "Large-format artwork (A3–A0)",
        "Campaign visual systems",
        "Branding & identity",
      ],
      cta: { label: "Explore Design", href: "/services#cs-design" },
    },
    {
      id: "cs-photo",
      label: "CS PHOTO",
      title: "Photo Enhancement & Retouching",
      status: "live",
      description:
        "Photographs prepared to hold up everywhere they appear — from a poster to a social feed.",
      services: [
        "Photo enhancement",
        "Colour & exposure correction",
        "Portrait retouching",
        "Background cleanup / replacement",
        "Object removal",
        "Image restoration",
        "Creative manipulation",
        "Campaign portrait preparation",
      ],
      cta: { label: "Explore Photo", href: "/services#cs-photo" },
    },
    {
      id: "cs-video",
      label: "CS VIDEO",
      title: "Video Editing & Production",
      status: "live",
      description:
        "Edits built for how people actually watch — short, clear and made for mobile.",
      services: [
        "Social-media videos",
        "Campaign & event videos",
        "Promotional / YouTube videos",
        "Short-form / Reels",
        "Music visuals",
        "Colour correction",
        "Audio synchronisation",
      ],
      cta: { label: "Explore Video", href: "/services#cs-video" },
    },
    {
      id: "cs-motion",
      label: "CS MOTION",
      title: "Motion Graphics",
      status: "live",
      description:
        "Your campaign, in motion — built for WhatsApp, social feeds and screens.",
      services: [
        "Animated posters",
        "Motion graphics",
        "Animated announcements",
        "Typography animation",
        "Campaign motion",
        "Logo animation",
        "Social-media motion",
        "Video intros / outros",
      ],
      cta: { label: "Explore Motion", href: "/services#cs-motion" },
    },
  ],
};

// ── DIGITAL (coming soon) ──────────────────────────────────
export const digital: Ecosystem = {
  id: "digital",
  name: "DIGITAL",
  tagline: "The next chapter.",
  description:
    "Web, software and automation — the digital layer CS Media Studios is building toward.",
  divisions: [
    {
      id: "cs-web",
      label: "CS WEB",
      title: "Website Design & Development",
      status: "coming-soon",
      description:
        "Business websites, landing pages, portfolios, e-commerce and web applications — with hosting and deployment handled.",
      services: [
        "Business websites",
        "Landing pages",
        "Portfolio websites",
        "E-commerce",
        "Web applications",
        "Hosting & deployment",
      ],
      cta: { label: "Join the Waitlist", href: "/contact" },
    },
    {
      id: "cs-software",
      label: "CS SOFTWARE",
      title: "Custom Software & Web Applications",
      status: "coming-soon",
      description:
        "Business applications, internal tools, dashboards, client portals and automation systems — built for how you actually work.",
      services: [
        "Business applications",
        "Internal tools & dashboards",
        "Client portals",
        "Custom web applications",
        "Automation systems",
      ],
      cta: { label: "Join the Waitlist", href: "/contact" },
    },
    {
      id: "cs-automation",
      label: "CS AUTOMATION",
      title: "Business Automation & Digital Workflows",
      status: "coming-soon",
      description:
        "Intelligent workflows that remove busywork and keep the business moving.",
      services: [
        "Workflow automation",
        "Digital operations",
        "Intelligent systems",
      ],
      cta: { label: "Coming Soon", href: "/contact" },
    },
  ],
};

// ── TECHNOLOGY (coming soon) ───────────────────────────────
export const technology: Ecosystem = {
  id: "technology",
  name: "TECHNOLOGY",
  tagline: "Built for power. Built to last.",
  description:
    "The infrastructure side — custom machines and systems for creators and businesses.",
  divisions: [
    {
      id: "cs-custom-pc",
      label: "CS CUSTOM PC",
      title: "Custom Computer Builds & Upgrades",
      status: "coming-soon",
      description: "Custom-built for creators, gamers, editors, designers, producers and professionals.",
      services: [
        "Custom builds",
        "Upgrades",
        "Component selection",
        "Performance optimisation",
        "Troubleshooting",
      ],
      cta: { label: "Coming Soon", href: "/contact" },
    },
    {
      id: "cs-workstations",
      label: "CS WORKSTATIONS",
      title: "High-Performance Workstations",
      status: "coming-soon",
      description: "For video editing, 3D, music production, design, development and AI workloads.",
      services: [
        "Creative workstations",
        "AI / ML workstations",
        "Editing rigs",
        "3D / rendering systems",
      ],
      cta: { label: "Coming Soon", href: "/contact" },
    },
    {
      id: "cs-servers",
      label: "CS SERVERS",
      title: "Server, Storage & Infrastructure",
      status: "coming-soon",
      description: "Local servers, storage, backup and media-servers for business infrastructure.",
      services: [
        "Local servers",
        "Storage systems",
        "Backup systems",
        "Media servers",
        "Business infrastructure",
      ],
      cta: { label: "Coming Soon", href: "/contact" },
    },
    {
      id: "cs-infrastructure",
      label: "CS INFRASTRUCTURE",
      title: "Networking & Technology Infrastructure",
      status: "coming-soon",
      description: "Future networking and infrastructure services.",
      services: ["Networking", "Infrastructure planning"],
      cta: { label: "Coming Soon", href: "/contact" },
    },
  ],
};

// ── FUTURE: CS LABS ────────────────────────────────────────
export const labs: ServiceDivision = {
  id: "cs-labs",
  label: "CS LABS",
  title: "Experimental — AI, Digital Products & Platforms",
  status: "future",
  description:
    "AI systems, digital products, software products, automation and technology projects — exploratory work for what comes next.",
  services: [
    "AI systems",
    "Digital products",
    "Software products",
    "Automation experiments",
    "Technology platforms",
  ],
  cta: { label: "Future Development", href: "/about" },
};

export const allEcosystems: Ecosystem[] = [creative, digital, technology];

// Flat list of all live services (for backwards compat / sitemap helpers)
export const allDivisions: ServiceDivision[] = [
  ...creative.divisions,
  ...digital.divisions,
  ...technology.divisions,
  labs,
];

// ── Backwards-compat: old `services` export shape used by some pages ──
export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  examples: string[];
}
export const services: Service[] = allDivisions
  .filter((d) => d.status === "live")
  .map((d) => ({
    slug: d.id,
    title: d.title,
    short: d.description,
    description: d.description,
    examples: d.services.slice(0, 4),
  }));
