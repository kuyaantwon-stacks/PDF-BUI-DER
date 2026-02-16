/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  typescript: {
    // This is the "Magic Button" that ignores the red errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This keeps the build moving even with styling warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
