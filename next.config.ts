import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
