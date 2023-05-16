/** @type {import('next').NextConfig} */
const [,API_URL] = process.env.API_URL.split("//");
if(!API_URL) throw new Error("API_URL is not defined")

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
        hostname: isDev ? 'localhost' : API_URL,
        port: isDev ? "3000" : "",
        pathname: '/image/*',
      },
    ]
  }
}

export default nextConfig
