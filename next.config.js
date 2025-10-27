/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    qualities: [75, 85],
  },
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
