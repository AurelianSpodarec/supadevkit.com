import type { NextConfig } from "next"
import { webpack } from "next/dist/compiled/webpack/webpack";

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
  transpilePackages: ["svgo"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          module: false,
        },
      };
    }

    return config;
  },
};

export default nextConfig
