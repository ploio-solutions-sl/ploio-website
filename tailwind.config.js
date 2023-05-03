/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './intro-template/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        texture: "url('/images/texture.png')",
      },
      colors: {
        primary: 'var(--primary)',
        branding: {
          50: '#edfcf6',
          100: '#d4f7e8',
          200: '#adedd6',
          300: '#6edcba',
          400: '#40c7a2',
          500: '#1cad8a',
          600: '#108b70',
          700: '#0c705c',
          800: '#0d584a',
          900: '#0b493e',
        },
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
