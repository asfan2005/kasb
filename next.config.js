/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'yuz.uz', 
      'assets.aceternity.com',
      'cdn.pixabay.com',
      'assets.mixkit.co',
      'www.youtube.com',
    ],
  },
}

module.exports = nextConfig 