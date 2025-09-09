/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  async redirects() {
    return [
      {
        source: '/verticals',
        destination: '/markets',
        permanent: true
      },
      {
        source: '/verticals/:slug',
        destination: '/markets/:slug',
        permanent: true
      }
    ];
  }
};

export default nextConfig;


