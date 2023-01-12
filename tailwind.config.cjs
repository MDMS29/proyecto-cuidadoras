/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'tall': '890px' ,
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}
