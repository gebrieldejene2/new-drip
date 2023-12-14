/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ransel: ['Ransel'],
      },
      colors: {
        darkGray: '#2D2D2D',
        lightGray: '#525050',
        cloud: '#DDDDDD',
      },
    },
  },
}
