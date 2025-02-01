import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/aragant.github.io/" : "",
  basePath: isProd ? "/aragant.github.io" : "",
  images: {
    unoptimized: true, // Désactive l'optimisation Next.js des images pour GitHub Pages
  },
};

export default nextConfig;
