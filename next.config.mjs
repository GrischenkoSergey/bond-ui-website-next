/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization for responsive images on mobile devices
    unoptimized: false,
    // Supported formats: WebP and AVIF are automatically served when browser supports them
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images (matching common mobile breakpoints)
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    // Image sizes for the 'sizes' attribute (matching carousel requirements)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache time for optimized images (1 year)
    minimumCacheTTL: 31536000,
    // Loader configuration for standalone builds
    loader: 'default',
    // Cache optimized images on disk (persistent across restarts)
    disableStaticImages: false,
    // Reduce concurrent image optimization to improve startup time
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
  },
  // Improve development server startup
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: ['react-swipeable', 'next-themes'],
  },
  output: 'standalone',
};

export default nextConfig;
