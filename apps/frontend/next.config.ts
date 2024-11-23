import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  distDir: 'out', 
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
