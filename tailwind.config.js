/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,*}"],
  theme: {
    extend: {
      colors: {
        brand1: "#FF5E00",
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
      },
    },
  },
  plugins: [],
};
