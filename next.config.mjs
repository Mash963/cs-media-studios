/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recommended source: https://nextjs.org/docs/app/api-reference/next-config-js/images
  images: {
    // Add remote domains here if portfolio images are ever hosted off-site.
    // Example: remotePatterns: [{ protocol: "https", hostname: "images.example.com" }]
    remotePatterns: [],
  },
};

export default nextConfig;
