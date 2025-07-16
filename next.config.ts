/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: "standalone",

  // Experimental features
  experimental: {
    // Enable server actions if needed
    serverActions: true,
  },

  // Add other configurations as needed
};

module.exports = nextConfig;
