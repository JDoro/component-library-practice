const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes(
      {
        light: {
          primary: "#032135",
          secondary: "#333",
          accent: "white",
        },
        dark: {
          primary: "#580202",
          secondary: "#055805",
          accent: "#040462",
        },
      },
      {
        defaultTheme: "light",
      }
    ),
  ],
};
