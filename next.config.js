/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
      {
        source: "/services/eu-certification-project/ce-certification",
        destination: "/ce-certification-europe/",
        permanent: true,
      },
      {
        source: "/services/american-certification/fcc-certification-of-us",
        destination: "/fcc-certification/",
        permanent: true,
      },
      {
        source: "/services/american-certification/ic-certification-of-canada",
        destination: "/ic-certification/",
        permanent: true,
      },
      {
        source:
          "/services/certification-project-of-asian/telec-certification-of-japan",
        destination: "/TELEC-certification/",
        permanent: true,
      },
      {
        source: "/services/eu-certification-project/rohs-testing",
        destination: "/rohs-certification/",
        permanent: true,
      },
      {
        source: "/services/eu-certification-project/reach-certification",
        destination: "/reach-certification/",
        permanent: true,
      },
      {
        source: "/services/eu-certification-project/reach-certification",
        destination: "/reach-compliance-certificate/",
        permanent: true,
      },
      {
        source: "/services/american-certification/cpc-certification",
        destination: "/american-children-product-certification/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
