/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#1F1D2B',
        'dark-container': '#252836',
      },
      screens: {
        'cols-3' : '900px'
      }
    },
  },
  plugins: [],
}

