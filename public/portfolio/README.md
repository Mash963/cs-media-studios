# Portfolio images

Place real portfolio images in this folder.

## How to add a new portfolio image

1. Drop your image in this folder, e.g. `ward-12-campaign.png` or `.jpg`.
2. Open `src/data/portfolio.ts`.
3. Update (or add) an item and point its `image` field to the file path,
   e.g. `image: "/portfolio/ward-12-campaign.jpg"`.
4. The site will load the real image automatically.

## If no image is present

If the file referenced in `image` does not exist, the page automatically
shows a designed placeholder block using the item's `placeholder` text.
This lets the site ship before real artwork is ready.

## Good practice

- Use optimised, reasonably sized images (Next.js optimises them further).
- Match the `aspect-[4/5]` / `aspect-[3/4]` framing for a consistent grid.
- Give every item a clear `title`, `category`, `description` and `id`.
