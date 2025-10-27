/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      colors: {
        linen: '#f3efe8',
        accent: '#cd0000',
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '400' }],
        'p': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}