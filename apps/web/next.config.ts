import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Disabled: the on-disk Turbopack dev cache (.next/dev/cache) repeatedly
    // corrupts inside this OneDrive-synced project folder because OneDrive
    // locks/moves files mid-write. In-memory caching avoids that entirely.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
