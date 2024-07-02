import { fileURLToPath } from "url";
import createJiti from "jiti";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ["@smartflow/api"],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
