import localFont from 'next/font/local';

export const kyokasho = localFont({
  src: [
    {
      path: '../../public/assets/fonts/UDDigiKyokashoN-B-01.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kyokasho', // for Tailwind
});