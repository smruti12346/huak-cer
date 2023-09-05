/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.huak-cer.com"],
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
