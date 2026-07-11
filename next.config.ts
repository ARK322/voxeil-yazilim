import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  // Self-hosted (Docker/Hestia): image optimizer 400 veriyor; public assets doğrudan servis edilsin
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
