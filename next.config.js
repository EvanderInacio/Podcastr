/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig