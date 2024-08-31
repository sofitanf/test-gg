/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#545151',
        grey10: '#777777',
        orange: '#F4A403',
        red: '#DC251C',
        red10: '#FFDDDD',
        green: '#18A661',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
