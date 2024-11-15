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
        KarlaSemiBold: ['KarlaSemiBold', 'sans-serif'],
        KarlaExtraBold: ['KarlaExtraBold', 'sans-serif'],
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
      cursor: {
        contact:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='auto' viewBox='0 0 100 100' style='fill:black;font-size:45px;'%3E%3Ctext y='50%25'%3E%F0%9F%92%8C%3C/text%3E%3C/svg%3E\") 16 20, auto",
        resume:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='auto' viewBox='0 0 100 100' style='fill:black;font-size:45px;'%3E%3Ctext y='50%25'%3E%F0%9F%93%9D%3C/text%3E%3C/svg%3E\") 16 20, auto"
      }
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
