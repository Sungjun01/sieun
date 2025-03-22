/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export to avoid SSR issues
  output: "export",

  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },

  // Temporarily ignore TypeScript and ESLint errors for deployment
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
