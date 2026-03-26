import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ne', 'ja'],
  defaultLocale: 'en'
});