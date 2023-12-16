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
        primary: "#D8C3A5",
        dark: "#8E8D8A",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
