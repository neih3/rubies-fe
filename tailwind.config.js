/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Var: ["Varela Round", "sans-serif"],
      },
      colors: {
        "background-Sidebar": "#fff",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
