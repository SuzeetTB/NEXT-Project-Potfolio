// Helper to load messages for getStaticProps
import en from '@/configs/locales/en.json';
import np from '@/configs/locales/np.json';
import jp from '@/configs/locales/jp.json';

export type Locale = 'en' | 'np' | 'jp';

export const messagesMap: Record<Locale, typeof en> = { en, np, jp };

export async function getI18nProps(locale: string) {
  const normalizedLocale = (['en', 'np', 'jp'] as Locale[]).includes(locale as Locale)
    ? (locale as Locale)
    : 'en';

  return {
    messages: messagesMap[normalizedLocale],
  };
}