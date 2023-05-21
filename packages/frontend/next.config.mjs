/** @type {import('next').NextConfig} */
const [,API_URL] = process.env.NEXT_PUBLIC_API_URL.split("//");
if(!API_URL) throw new Error("API_URL is not defined")

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3005',
        pathname: '/image/*',
      },
      {
        protocol: 'https',
        hostname: API_URL,
        port: "",
        pathname: '/image/*',
      }
    ]
  }
}

export default nextConfig
