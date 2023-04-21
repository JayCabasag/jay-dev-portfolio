/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.AUTH_DOMAIN,
    PROJECT_ID: process.PROJECT_ID,
    STORAGE_BUCKET: process.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.MESSAGING_SENDER_ID,
    APP_ID: process.APP_ID,
  }
}

module.exports = nextConfig
