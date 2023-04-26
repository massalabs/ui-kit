// This is the tailwind preset for MassaStation applications.

// We disable eslint to be able to define plugins.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require("tw-colors");

const colorBrand = "#1AE19D";
const colorWhite = "#FFFFFF";
const colorDarkGrey = "#DADADA";
const colorLightGrey = "#F1F1F1";
const colorDarkBlue = "#151A26";
const colorBasicBlue = "#1A202E";
const colorLightBlue = "#2E374C";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('./src/assets/bg-image-landing-page.svg')",
      },
    },
    letterSpacing: {
      massa: "-0.01em",
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: colorWhite,
        secondary: colorLightGrey,
        tertiary: colorDarkGrey,
        brand: colorBrand,
        neutral: colorDarkBlue,
        info: colorLightBlue,
        success: colorBrand,
      },
      dark: {
        primary: colorDarkBlue,
        secondary: colorBasicBlue,
        tertiary: colorLightBlue,
        brand: colorBrand,
        neutral: colorWhite,
        info: colorDarkGrey,
        success: colorBrand,
      },
    }),
  ],
};
