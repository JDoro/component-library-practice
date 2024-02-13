import {createThemes} from "tw-colors";

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
          base: "#ffffff",
          primary: "#fa7707",
          secondary: "#3037c5",
          accent: "#000000",
          Success: "#039e03",
          warning: "#e6c131",
          error: "#ff0000",
        },
        dark: {
          base: "#000000",
          primary: "#fa7707",
          secondary: "#1ceddb",
          accent: "#ffffff",
          Success: "#039e03",
          warning: "#e6c131",
          error: "#ff0000",
        },
      },
      {
        defaultTheme: "light",
      }
    ),
  ],
};
