/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'yuz.uz', 
      'assets.aceternity.com',
    ],
  },
}

module.exports = nextConfig 