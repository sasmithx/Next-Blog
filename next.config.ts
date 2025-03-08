import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add Freepik configuration
      {
        hostname: "img.freepik.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "gravatar.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      }
    ]
  }
};

export default nextConfig;
