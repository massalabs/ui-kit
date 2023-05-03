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
    fontFamily: {
      Urbane: ["Urbane", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: colorWhite,
        primaryAlt: colorDarkBlue,
        secondary: colorLightGrey,
        secondaryAlt: colorBasicBlue,
        tertiary: colorDarkGrey,
        tertiaryAlt: colorLightBlue,
        brand: colorBrand,
        neutral: colorDarkBlue,
        info: colorLightBlue,
        infoAlt: colorDarkGrey,
        infoAltBis: colorLightGrey,
        success: colorBrand,
      },
      dark: {
        primary: colorDarkBlue,
        primaryAlt: colorWhite,
        secondary: colorBasicBlue,
        secondaryAlt: colorLightGrey,
        tertiary: colorLightBlue,
        tertiaryAlt: colorDarkGrey,
        brand: colorBrand,
        neutral: colorWhite,
        info: colorDarkGrey,
        infoAlt: colorDarkGrey,
        infoAltBis: colorLightGrey,
        success: colorBrand,
      },
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".mas-banner": {
          fontSize: "36px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "43px",
          fontStyle: "normal",
        },
        ".mas-title": {
          fontSize: "34px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "41px",
        },
        ".mas-subtitle": {
          fontSize: "20px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "24px",
        },
        ".mas-h3": {
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "17px",
        },
        ".mas-buttons": {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
        },
        ".mas-menu-active": {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
        },
        ".mas-menu-default": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
        },
        ".mas-menu-underline": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Urbane"),
          lineHeight: "19px",
          textDecoration: "underline",
          fontStyle: "normal",
        },
        ".mas-body": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "24px",
          fontStyle: "normal",
        },
        ".mas-body2": {
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "21px",
        },
        ".mas-caption": {
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.Poppins"),
          lineHeight: "18px",
        },
      });
    }),
  ],
};
