import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    // Warning: This allows production builds to complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply caching to all static assets
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1-year caching
          },
        ],
      },
    ];
  },
};

export default nextConfig;
