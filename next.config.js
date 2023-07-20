/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["huak-api.thecbdworld.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
