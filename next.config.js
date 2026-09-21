const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.*', 'localhost'],
}

module.exports = nextConfig
