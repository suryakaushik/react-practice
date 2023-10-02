/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '870px',
      // => @media (min-width: 870px) { ... }
    },
  },
  plugins: [],
};
