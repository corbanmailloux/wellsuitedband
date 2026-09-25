import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

export default nextConfig
