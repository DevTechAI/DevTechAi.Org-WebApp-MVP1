/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out this line:
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'ui-avatars.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Output configuration for better compatibility
  output: 'standalone',
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    // Handle potential module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'devtechai.org',
          },
        ],
        destination: 'https://www.devtechai.org/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'http://devtechai.org',
          },
        ],
        destination: 'https://www.devtechai.org/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
