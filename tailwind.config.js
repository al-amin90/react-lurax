/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: '  font-family: "Work Sans", sans-serif',
        montserrat: '  font-family: "Montserrat", sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
}

