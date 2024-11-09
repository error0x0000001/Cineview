/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        black2: '#000000',
        black3: '#000000',
        blackLighter: '#000000',
        blackLight: '#000000',
        pink: '#000000',
        orange: '#f89e00',
        gradient: 'linear-gradient(98.37deg, #000000 0.99%, #000000 100%)',
      }
    },


  },
  plugins: [],
};
