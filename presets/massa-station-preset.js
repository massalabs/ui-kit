// This is the tailwind preset for MassaStation applications.

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
};
