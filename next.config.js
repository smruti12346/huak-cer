/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["huak-api.thecbdworld.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
