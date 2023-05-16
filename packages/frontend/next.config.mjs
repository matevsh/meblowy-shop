/** @type {import('next').NextConfig} */
const ENV = process.env.ENV || "prod"
const isDev = ENV === "dev";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev ? 'localhost' : 'nextjs-nestjs-shop-production.up.railway.app',
        port: isDev ? "3000" : "",
        pathname: '/image/*',
      },
    ]
  }
}

export default nextConfig
