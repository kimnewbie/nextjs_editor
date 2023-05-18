/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 추가
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  }
}

module.exports = nextConfig
