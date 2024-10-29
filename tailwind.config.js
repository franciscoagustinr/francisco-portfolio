/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'HomemadeApple': ['HomemadeApple', 'sans-serif'],
        'Lilita': ['Lilita', 'sans-serif']
      }
    },
  },
  plugins: [],
};
