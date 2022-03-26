/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['picsum.photos', 'www.flaticon.com'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'jp', 'np'],
    // languages: ['en', 'jp'],
    // defaultLanguage: 'en',
  },
}
module.exports = nextConfig
