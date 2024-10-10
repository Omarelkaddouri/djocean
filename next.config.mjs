/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Index',
        destination: '/login',
        permanent: false, // Set to true if you want this to be a permanent redirect (HTTP 308)
      },
    ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['via.placeholder.com'], // Add this line to allow images from this domain
  },
};

export default nextConfig;
