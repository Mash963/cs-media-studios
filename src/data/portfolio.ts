export type PortfolioCategory =
  | "Design"
  | "Campaign"
  | "Photo"
  | "Video"
  | "Motion"
  | "Digital"
  | "Events"
  | "Technology";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  year?: string;
  services?: string[];
  image: string;
  placeholder: string;
}

export const portfolioCategories: Array<PortfolioCategory | "All"> = [
  "All",
  "Design",
  "Campaign",
  "Photo",
  "Video",
  "Motion",
  "Digital",
  "Events",
  "Technology",
];

export const portfolio: PortfolioItem[] = [
  {
    id: "ward-12-campaign",
    title: "Ward 12 Candidate Campaign",
    category: "Campaign",
    description:
      "A full ward campaign visual system — posters, flyers and social formats built on one consistent identity. Placeholder pending real work.",
    year: "2026",
    services: ["Design", "Campaign system"],
    image: "/portfolio/ward-12-campaign.jpg",
    placeholder: "WARD 12",
  },
  {
    id: "community-rally",
    title: "Community Rally Programme",
    category: "Events",
    description:
      "Clear, confident event communication for a community rally. Placeholder pending real work.",
    year: "2026",
    services: ["Design"],
    image: "/portfolio/community-rally.jpg",
    placeholder: "RALLY",
  },
  {
    id: "candidate-launch",
    title: "Candidate Launch Identity",
    category: "Design",
    description:
      "Launch-day creative for a candidate — name lock-up, banner and digital kit. Placeholder pending real work.",
    year: "2026",
    services: ["Design", "Branding"],
    image: "/portfolio/candidate-launch.jpg",
    placeholder: "LAUNCH",
  },
  {
    id: "social-media-kit",
    title: "Election Social Media Kit",
    category: "Design",
    description:
      "A day-of-election social media kit built to stay legible on small screens. Placeholder pending real work.",
    year: "2026",
    services: ["Design", "Social"],
    image: "/portfolio/social-media-kit.jpg",
    placeholder: "VOTE",
  },
  {
    id: "photo-campaign-portrait",
    title: "Campaign Portrait — Photo Enhancement",
    category: "Photo",
    description:
      "Portrait retouching and campaign-ready preparation. Placeholder pending real work.",
    year: "2026",
    services: ["Photo", "Retouching"],
    image: "/portfolio/photo-campaign-portrait.jpg",
    placeholder: "PHOTO",
  },
  {
    id: "event-video-edit",
    title: "Event Video — Campaign Edit",
    category: "Video",
    description:
      "Campaign event video edit with colour correction and audio sync. Placeholder pending real work.",
    year: "2026",
    services: ["Video", "Editing"],
    image: "/portfolio/event-video-edit.jpg",
    placeholder: "VIDEO",
  },
  {
    id: "large-format-banner",
    title: "Large Format Banner Series",
    category: "Design",
    description:
      "A series of large-format banners engineered for print readiness. Placeholder pending real work.",
    year: "2026",
    services: ["Design", "Large format"],
    image: "/portfolio/large-format-banner.jpg",
    placeholder: "BANNER",
  },
  {
    id: "event-launch-poster",
    title: "Event Launch Poster",
    category: "Events",
    description:
      "A single poster with a clear hierarchy — what, where, when. Placeholder pending real work.",
    year: "2026",
    services: ["Design"],
    image: "/portfolio/event-launch-poster.jpg",
    placeholder: "EVENT",
  },
  {
    id: "motion-announcement",
    title: "Campaign Motion Announcement",
    category: "Motion",
    description:
      "An animated campaign announcement built for WhatsApp and social feeds. Placeholder pending real work.",
    year: "2026",
    services: ["Motion", "Campaign"],
    image: "/portfolio/motion-announcement.jpg",
    placeholder: "MOTION",
  },
  {
    id: "community-programme",
    title: "Community Programme Poster",
    category: "Design",
    description:
      "A community programme poster that reads clearly and organises information with care. Placeholder pending real work.",
    year: "2026",
    services: ["Design"],
    image: "/portfolio/community-programme.jpg",
    placeholder: "PROGRAMME",
  },
];
