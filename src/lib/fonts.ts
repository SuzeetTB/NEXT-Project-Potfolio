import localFont from 'next/font/local';
import { Inter, Inspiration, Monoton, Kalam } from 'next/font/google';

// --- Locale-specific body fonts ---

// Japanese body font (local, handwritten/educational style)
export const kyokasho = localFont({
  src: [
    {
      path: '../../public/assets/fonts/UDDigiKyokashoN-B-01.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kyokasho',
  display: 'swap',
});

// English body font (Google)
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Nepali body font (Google — Kalam, supports Devanagari)
export const kalam = Kalam({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
  display: 'swap',
});

// --- Decorative / stylized fonts ---

// Decorative display font for name headings
export const kalima = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Kalima.woff2',
      weight: '0',
      style: 'normal',
    },
  ],
  variable: '--font-kalima',
  display: 'swap',
});

// Cursive handwriting font for stylized text
export const inspiration = Inspiration({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inspiration',
  display: 'swap',
});

// Bold display font for accent text
export const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton',
  display: 'swap',
});