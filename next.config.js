/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "scontent-los2-1.xx.fbcdn.net",
      "facebook.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
