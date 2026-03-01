// next.config.js or next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // Contentful
      },
      {
        protocol: "https",
        hostname: "i.scdn.co", // Spotify
      },
      {
        protocol: "https",
        hostname: "assets.ctfassets.net", // mp3
      },
    ],
  },
};

export default nextConfig;
