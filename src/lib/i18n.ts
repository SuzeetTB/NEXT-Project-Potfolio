// Helper to load messages for getStaticProps
export async function getI18nProps(locale: string) {
    return {
      messages: (await import(`@/configs/locales/${locale}.json`)).default,
    };
  }