/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'nodejs', // forces Node.js runtime instead of Edge
  },
}

module.exports = nextConfig