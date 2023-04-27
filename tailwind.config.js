/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'edu-blue': '#4CA7B1',
        'edu-yellow': '#F7CE46',
      },
    },
  },
  plugins: [],
}

