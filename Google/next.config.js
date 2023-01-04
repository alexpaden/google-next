/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'lh3.googleusercontent.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
