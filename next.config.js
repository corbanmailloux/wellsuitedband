/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    qualities: [75, 85],
  },
  allowedDevOrigins: ['192.168.1.*', 'localhost'],
}

module.exports = nextConfig
