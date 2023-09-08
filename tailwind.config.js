/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '12px',
      },
      colors: {
        primary: {
          100: '#E9E2F3',
          200: '#6E01F8',
          300: '#7000FF',
          400: '#380C7E',
          500: '#1F0F39',
          600: '#11002D',
          
        }
      },
      fontSize: {
        5: ["20px", "1.5"],
        6: ["24px", "1.5"],
        8: ["32px", "1.5"],
        10: ["40px", "1.5"],
        11: ["44px", "1.5"],
        12: ["48px", "1.5"],
      },
      fontFamily: {
        sans: ["Noto Sans TC, sans-serif"],
        shrik: ["Shrikhand, cursive"]
      }
    },
  },
  plugins: [],
}

