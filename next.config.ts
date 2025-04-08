import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.selingo.ai',
          },
        ],
        destination: 'https://selingo.ai/:path*',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
