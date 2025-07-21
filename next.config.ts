/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // GitHub Pages serves from a subdirectory, so we need to handle this
  basePath: process.env.NODE_ENV === "production" ? "/Front-End" : "",

  // Handle image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: Add trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
