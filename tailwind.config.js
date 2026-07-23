/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#1c9bb1',
        'brand-black': '#0e0f11',
        'brand-white': '#fcfbfc',
      },
    },
  },
  plugins: [],
}
