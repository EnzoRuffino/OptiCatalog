const path = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{vue,ts}'),
    path.join(__dirname, 'src/**/*.css'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        display: ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      colors: {
        wood: {
          25: '#fdfbf7',
          50: '#faf6ef',
          100: '#f1e9dc',
          150: '#e9dfd0',
          200: '#dccfb8',
          300: '#c4b196',
          400: '#a68b6a',
          500: '#8b7355',
          600: '#6f5c44',
          700: '#5a4a38',
          800: '#3d3328',
          900: '#2a221a',
          950: '#1a1510',
        },
        clay: {
          50: '#faf5f2',
          100: '#f0e4dc',
          200: '#e0c8b8',
          300: '#c99d84',
          400: '#b67a5c',
          500: '#9c5d45',
          600: '#854a38',
          700: '#6d3c2f',
          800: '#5a332a',
          900: '#4c2d27',
        },
        moss: {
          50: '#f4f6f0',
          100: '#e5eae0',
          200: '#cdd6c4',
          300: '#a8b89a',
          400: '#7d9070',
          500: '#5f7354',
          600: '#4a5b43',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42, 34, 26, 0.04), 0 8px 24px rgba(42, 34, 26, 0.06)',
        lift: '0 2px 4px rgba(42, 34, 26, 0.05), 0 16px 40px rgba(42, 34, 26, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      maxWidth: {
        content: '68rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
