/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -20px)" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      
    },
  },
  plugins: [],
}