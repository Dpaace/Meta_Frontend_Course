/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'custom-height-lg': 'calc(100vh - 96px - 266px)',
        'custom-height-sm': 'calc(100vh - 96px)',
      },
      backgroundColor: {
        'black-50': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}