import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/audivia-website',
  assetPrefix: '/audivia-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
