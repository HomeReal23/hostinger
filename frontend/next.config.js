/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    domains: ["images.unsplash.com", "localhost", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
