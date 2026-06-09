import type { NextConfig } from "next";

// Safeguard against broken experimental global.localStorage on Node.js server side
if (typeof window === "undefined" && typeof global !== "undefined") {
  try {
    delete (global as any).localStorage;
  } catch (e) {
    try {
      (global as any).localStorage = undefined;
    } catch (err) {}
  }
}

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
