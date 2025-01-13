import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
};

export default nextConfig
