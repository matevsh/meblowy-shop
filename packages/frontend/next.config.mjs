/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-nestjs-shop-production.up.railway.app',
        port: '',
        pathname: '/image/*',
      },
    ]
  }
}

export default nextConfig
