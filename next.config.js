/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github/:out",
        destination: "https://github.com/imvaskel/:out",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/imvaskel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
