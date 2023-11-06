/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly', 'res.cloudinary.com', 'tailwindui.com', 'images.unsplash.com'],
  }
}

module.exports = nextConfig
