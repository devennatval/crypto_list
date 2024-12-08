import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.pintu.co.id/:path*',
      },
    ]
  }
};

export default nextConfig;
