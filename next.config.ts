import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Alte Vercel-Adresse dauerhaft auf die echte Domain umleiten, damit Google nur eine Version indexiert. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "raw-adventures-web.vercel.app" }],
        destination: "https://www.raw-mountain.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
