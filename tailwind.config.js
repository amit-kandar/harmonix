/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
      animation: {
        "slide": "slide 25s infinite linear"
      },
      keyframes: {
        slide: {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(-100%)" }
        }
      },
      screens: {
        "xs": "400px",
        "lg": "1028px"
      }
    },
  },
  plugins: [],
}