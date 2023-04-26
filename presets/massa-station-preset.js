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
import plugin from "tailwindcss/plugin";

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
    fontFamily: {
      Urbane: ["Urbane", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
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
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".Banner": {
          fontSize: "36px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "43px",
          fontStyle: "normal",
        },
        ".Title": {
          fontSize: "34px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "41px",
        },
        ".Subtitle": {
          fontSize: "20px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "24px",
        },
        ".H3": {
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "17px",
        },
        ".Buttons": {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
        },
        ".MenuActive": {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
        },
        ".MenuDefault": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
        },
        ".MenuUnderline": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
          textDecoration: "underline",
          fontStyle: "normal",
        },
        ".Body": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "24px",
          fontStyle: "normal",
        },
        ".Body2": {
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "21px",
        },
        ".Caption": {
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "18px",
        },
      });
    }),
  ],
};
