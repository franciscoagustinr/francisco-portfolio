/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
        KarlaLight: ['KarlaLight', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        HomemadeApple: ['HomemadeApple', 'sans-serif'],
        HappyMonkey: ['HappyMonkey', 'sans-serif'],
        RampartOne: ['RampartOne', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '50%': {
            fill: 'transparent',
          },
        },
      },
      animation: {
        blink: 'blink 0.8s infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.delay-250ms': {
          animationDelay: '250ms',
        },
        '.delay-500ms': {
          animationDelay: '500ms',
        },
      });
    },
  ],
};
