// This is the tailwind preset for MassaStation applications.

// We disable eslint to be able to define plugins.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require("tw-colors");

const colorGreen = "#1AE19D";
const colorWhite = "#FFFFFF";
const colorDarkGrey = "#DADADA";
const colorLightGrey = "#F1F1F1";
const colorDarkBlue = "#151A26";
const colorBasicBlue = "#1A202E";
const colorLightBlue = "#2E374C";
const colorError = "#FF4F4F";
const colorWarning = "#FFA41D";

/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
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
        brand: colorGreen,
        neutral: colorDarkBlue,
        info: colorLightBlue,
        // states:
        "s-success": colorGreen,
        "s-error": colorError,
        "-warning": colorWarning,
        "s-info": colorDarkGrey,
        // components:
        "c-default": colorDarkBlue,
        "c-hover": colorBasicBlue,
        "c-pressed": colorLightBlue,
        "c-disabled-1": colorDarkGrey,
        "c-disabled-2": colorLightGrey,
        // icons:
        "i-primary": colorDarkBlue,
        "i-secondary": colorWhite,
        "i-tertiary": colorGreen,
        // fonts:
        "f-primary": colorDarkBlue,
        "f-secondary": colorWhite,
        "f-tertiary": colorGreen,
        "f-disabled": colorDarkGrey,
      },
      dark: {
        primary: colorDarkBlue,
        secondary: colorBasicBlue,
        tertiary: colorLightBlue,
        brand: colorGreen,
        neutral: colorWhite,
        info: colorDarkGrey,
        // states:
        "s-success": colorGreen,
        "s-error": colorError,
        "-warning": colorWarning,
        "s-info": colorDarkGrey,
        // components:
        "c-default": colorWhite,
        "c-hover": colorLightGrey,
        "c-pressed": colorDarkGrey,
        "c-disabled-1": colorDarkGrey,
        "c-disabled-2": colorLightGrey,
        // icons:
        "i-primary": colorWhite,
        "i-secondary": colorDarkBlue,
        "i-tertiary": colorGreen,
        // fonts:
        "f-primary": colorWhite,
        "f-secondary": colorDarkBlue,
        "f-tertiary": colorGreen,
        "f-disabled": colorDarkGrey,
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
          lineHeight: "19px",
        },
        ".mas-menu-active": {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: theme("fontFamily.Urbane"),
          // lineHeight: "19px",
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
