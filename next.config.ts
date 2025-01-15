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
  // resolve: {
  //   fallback: {
  //     fs: false, // Disable fs or provide a mock implementation if needed
  //   },
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     process: 'process/browser', // Include process polyfill if needed
  //     Buffer: ['buffer', 'Buffer'], // Include Buffer polyfill if needed
  //   }),
  // ],
};

export default nextConfig
