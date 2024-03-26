/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js}",
    "./nuxt.config.{js}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#F5F5F7",
        grey: "#5D5D5F",
        back: '#f9f9fc',
        "light-black": "#020105",
        blue: "#3C4BDC",
        'light-black':'rgb(2, 1, 5)',
        'bor':"#EBEBEB"
      },
      fontSize:{
        min:'12px',
        s:'16px'
      },
      screens: {
        xs:'380px'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        firs: ["Firs", "sans-serif"],
        unbounded:["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
