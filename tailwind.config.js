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
        KarlaExtraBold: ['KarlaExtraBold', 'sans-serif'],
        RecoletaBlack: ['RecoletaBlack', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '50%': {
            fill: 'transparent',
          },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(15deg)" },
          "30%": { transform: "rotate(-15deg)" },
          "45%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75%": { transform: "rotate(-8deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        load: {
          "0%": { width: '0%' },
          "100%": { width: '100%' },
        },
        shine: {
          " 0% ": {
            left: "-110%",
          },
          "100%": {
            left: "110%",
          }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee404: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-30%)' },
        },
        marquee404Text: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(13%)' },
        },
        dialogBox: {
          '0%': { opacity: '0', transform: 'translateX(-5%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        appearAnimation: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientColorText: {
          '0%': { 'background-position': '0 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0 50%' },
        },
      },
      animation: {
        blink: 'blink 0.8s infinite',
        wavingHand: "wave 1.5s ease-in-out infinite",
        shake: "shake 0.8s linear infinite",
        loader: "load linear infinite",
        shine: "shine linear infinite",
        marquee: 'marquee 15s linear infinite',
        marquee404: 'marquee404 20s linear infinite',
        marquee404Text: 'marquee404Text 20s linear infinite',
        dialogBox: 'dialogBox 200ms ease-out',
        appear: 'appearAnimation 0.2s ease forwards',
        gradientText: 'gradientColorText 5s ease-in-out infinite'
      },
      cursor: {
        contact:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='auto' viewBox='0 0 100 100' style='fill:black;font-size:45px;'%3E%3Ctext y='50%25'%3E%F0%9F%92%8C%3C/text%3E%3C/svg%3E\") 16 20, auto",
        resume:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='auto' viewBox='0 0 100 100' style='fill:black;font-size:45px;'%3E%3Ctext y='50%25'%3E%F0%9F%93%9D%3C/text%3E%3C/svg%3E\") 16 20, auto"
      },
      screens: {
        '3xl': '1920px',
        '4xl': '4000px',
      },
      backgroundSize: {
        '300%': '300%',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(-45deg, #33cfff, #00bcf5, #d84831, #de6654)',
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
