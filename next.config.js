/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next', // Note: '.next' is the default; 'build' is fine if you prefer it
  images: {
    qualities: [25, 50, 75, 100], // Add this line
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'www.flaticon.com',
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'jp', 'np'],
  },
}

module.exports = nextConfig