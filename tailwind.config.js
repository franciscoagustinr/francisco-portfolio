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
      }
    },
  },
  plugins: [],
};
