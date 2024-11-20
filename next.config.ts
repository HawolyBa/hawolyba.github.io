import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: "out",
  images: {
    domains: ["images.pexels.com"],
  }
};

export default nextConfig;
