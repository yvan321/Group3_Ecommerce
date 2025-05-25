import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
 	// Will still allow production build with type errors!
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
