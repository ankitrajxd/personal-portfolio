import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oera6c24rr.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "static.cdnlogo.com",
      },
    ],
  },
};

export default nextConfig;
