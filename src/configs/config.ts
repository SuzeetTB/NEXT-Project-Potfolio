import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'np', 'jp'],
  defaultLocale: 'en'
});