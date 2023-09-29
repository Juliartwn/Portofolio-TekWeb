/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '15': '60px',
        '78': '300px',
      },
      colors: {
        'ijo': '#23CE6B',
        'gelap': '#272D2D',
        'abu': '#303633',
      }
    },
  },
  plugins: [],
}

