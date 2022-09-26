const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        current: colors.neutral,
      },
      fontFamily: {
        sans: ['Noto Sans KR'],
      },
      backgroundImage: {
        'kakao-login': "url('/assets/images/kakao_login_medium_narrow.png')",
      },
    },
  },
  plugins: [],
};
