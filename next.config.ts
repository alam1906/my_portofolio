import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
};

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

export default nextConfig;
