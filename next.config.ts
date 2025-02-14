import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
          hostname: "img.icons8.com",
        },
        {
          protocol: "https",
          hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.solarsystemscope.com", 
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "solarsystem.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "space-facts.com",
      },
      
    ],
  },
};

export default nextConfig;
