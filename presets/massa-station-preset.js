// This is the tailwind preset for MassaStation applications.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('./src/assets/bg-image-landing-page.svg')",
      },
    },
    colors: {
      "bg-primary": "#151A26",
      green: "#1AE19D",
    },
    letterSpacing: {
      massa: "-0.01em",
    },
  },
};
