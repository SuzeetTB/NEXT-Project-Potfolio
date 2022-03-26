module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'monton': ['Monoton', 'cursive'],
      'inspiration': ['Inspiration', 'cursive'],
    },
    extend: {
      boxShadow: {
        'ring': '0 0 5px rgba(255,255,255, 0.3)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        ring: 'ring 2s linear infinite',
        beat: 'beat 1s ease-out infinite',
      },
      colors: {
        zeit: {
          DEFAULT: '#00122c',
          10: '#27cded57',
          50: '#0050c6',
          100: '#00a0f2',
          200: '#005ae0',
          300: '#00317a',
          800: '#003b93',
          950: '#00275f',
        },
        light: {
          DEFAULT: '#26f7fd',
          200: '#02e7ee',
          300: '#02cfd5',
          400: '#02b7b2',
          500: '#018589',
          900: '#003b3d',
        },
        dark: {
          DEFAULT: '#00122c',
          200: '#0050c6',
          300: '#00275f',
          900: '#018589',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
        },
        ring: {
          '0%': { transform: 'rotate(0deg)', boxShadow: '1px 3px 5px rgba(255,0,255, 0.5)' },
          '50%': { transform: 'rotate(180deg)', boxShadow: '1px 3px 5px rgba(255,255,255, 0.8)' },
          '100%': { transform: 'rotate(360deg)', boxShadow: '1px 3px 5px rgba(255,0,0, 0.5)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
