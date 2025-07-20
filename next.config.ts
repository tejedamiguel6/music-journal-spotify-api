// next.config.js or next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net", // wildcard to cover all regional Facebook CDNs
      },
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
      { protocol: "https", hostname: "example.com" },
    ],
  },
};

export default nextConfig;
