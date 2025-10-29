/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    qualities: [75, 85],
  },
}

module.exports = nextConfig
