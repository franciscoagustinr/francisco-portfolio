/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
        'KarlaLight': ['KarlaLight', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'HomemadeApple': ['HomemadeApple', 'sans-serif'],
        'HappyMonkey': ['HappyMonkey', 'sans-serif'],
        'RampartOne': ['RampartOne', 'sans-serif']
      },
      cursor: {
        'punch': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='75' height='90' viewport='0 0 100 100' style='fill:black;font-size:45px;'><text y='50%'>🥊</text></svg>\") 16 0, auto",
      },
    },
  },
  plugins: [],
};
