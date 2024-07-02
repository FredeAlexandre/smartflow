/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: [
    /**
        "@smartflow/api",
        "@smartflow/auth",
        "@smartflow/db",
        "@smartflow/ui",
        "@smartflow/validators",
         */
  ],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
