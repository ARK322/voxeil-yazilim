import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  // Self-hosted (Docker/Hestia): image optimizer 400 veriyor; public assets doğrudan servis edilsin
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.voxeil.com" }],
        destination: "https://voxeil.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
