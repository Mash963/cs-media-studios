# CS Media Studios — Conqueror Supreme Creative & Technology Studio

**ONE STUDIO. EVERY FORMAT.** — CREATIVE. DIGITAL. TECHNOLOGY.

Premium production-ready commercial website for CS Media Studios, a South African independent creative studio (Design · Photo · Video · Motion · Campaign Media) evolving toward Digital (Web, Software, Automation) and Technology (Custom PC, Workstations, Servers, Infrastructure).

Live: `https://csmediastudios.co.za` (deploy via GitHub → Vercel)

---

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** — dark cinematic foundation, editorial typography (Inter + Space Grotesk)
- No heavy client JS — Reveal on scroll, accessible forms, `prefers-reduced-motion` respected

## Project structure

```
src/
  app/
    page.tsx              → Home — cinematic hero, signature, creative/digital/tech, one-brief flow, portfolio, evolution
    services/page.tsx     → Four ecosystems — Creative (live) / Digital (coming soon) / Technology (coming soon) / CS Labs (future)
    campaigns/page.tsx    → Campaign Services — visual systems
    campaign-design/page.tsx → redirect → /campaigns (legacy)
    pricing/page.tsx      → Graphic Design, Volume (25% off), Video, Photo, Motion, Social monthly
    portfolio/page.tsx + PortfolioView.tsx → data-driven, category filters (All/Design/Campaign/Photo/Video/Motion/Digital/Events/Technology)
    order/page.tsx        → 6-step project intake (Formspree)
    contact/page.tsx      → Direct contact + form (069 312 1571 · csupreme@gmail.com · m4sh2@outlook.com)
    about/page.tsx        → Philosophy, neutrality, honest scale, evolution
    how-it-works/page.tsx → 6 steps: Brief → Quote → Confirm → Create → Approve → Deliver
    terms/ privacy/ popia → Editable legal pages (seek professional review before publishing)
    layout.tsx, sitemap.ts, robots.ts, globals.css
  components/
    Header.tsx, Footer.tsx, Button.tsx, PageHero.tsx, SectionHeading.tsx, Reveal.tsx, QuoteForm.tsx, ContactForm.tsx, ...
  data/
    site.ts       → brand, nav, contact (single source of truth)
    services.ts   → creative / digital / technology / labs ecosystems
    pricing.ts    → designTiers, videoTiers, photoTiers, motionTiers, volumeTiers, socialPackages
    portfolio.ts  → PortfolioItem[] — add new projects here
    faqs.ts, legal.ts, popia.ts, ...
  lib/
    seo.ts, utils.ts
public/
  portfolio/*.jpg → placeholder images (replace with real work — never fabricate)
```

## Data — edit without touching components

- **Services:** `src/data/services.ts` — toggle `status: "live" | "coming-soon" | "future"` to activate Web/Software/PC/etc later without rebuilding the site.
- **Pricing:** `src/data/pricing.ts` — all tiers, volume, exclusions, social packages.
- **Portfolio:** `src/data/portfolio.ts` — add `{ id, title, category, year, services, image, placeholder }`. Categories drive filters and case-study pages (future).
- **Site:** `src/data/site.ts` — name, emails, phone `069 312 1571` → `tel:+27693121571`, WhatsApp `https://wa.me/27693121571`, URL, nav.

## Environment

Copy `.env.example` → `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

Create a form at https://formspree.io — both `/order` and `/contact` post to the same endpoint distinguished by `form-type`. Without this var, forms show a helpful error and direct contact details.

Never commit `.env.local`. `NEXT_PUBLIC_` values are browser-visible — only endpoint IDs (not secrets) belong here.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — must pass before deploy
npm run lint
```

Typecheck uses `typescript@5` — do not upgrade to TS 7 (breaks Next bundler).

## Deploy — GitHub → Vercel

1. Push to GitHub (clean repo, no secrets, no build artefacts).
2. Import project in Vercel — framework preset **Next.js**, build command `npm run build`, output `.next`.
3. Add env var `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel → Settings → Environment Variables.
4. Deploy — verify: no console errors, no broken routes, all assets load, OG image works, sitemap at `/sitemap.xml`.

## Performance & accessibility

- Optimised fonts (`next/font`), lazy portfolio images, modern formats, minimal JS
- Semantic HTML, keyboard nav, visible focus, alt text, sufficient contrast, touch-friendly CTAs
- Respects `prefers-reduced-motion`

## Trust & authenticity

Never invent clients, testimonials, awards, stats, revenue, partnerships or team members. Placeholders are clearly marked — replace with real work only. Political neutrality statement is required and present in About, Campaigns and Footer.

## Future expansion (foundation ready)

Client accounts, payments, auto-quotations, invoices, order tracking, dashboards, design approval, asset management, CMS, WhatsApp notifications, subscriptions, digital products, hosting — architected so Web/Software/PC/Server/Infrastructure can be activated by flipping `status` in `services.ts` + adding routes, no full rebuild.

## Contact

- **Phone / WhatsApp:** 069 312 1571 (`tel:+27693121571` · https://wa.me/27693121571)
- **Email:** csupreme@gmail.com
- **Alt:** m4sh2@outlook.com
- South Africa

---

© 2026 CS Media Studios. Built to scale — Media → Creative → Digital → Technology.
