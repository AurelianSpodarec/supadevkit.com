import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/util/svg2jsx',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
    };
    return config;
  },
};

export default nextConfig
