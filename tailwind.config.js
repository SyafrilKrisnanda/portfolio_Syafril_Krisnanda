/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "17px",
    },
    extend: {
      colors: {
        primary: "#0866ff",
        dark: "#000000F",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
