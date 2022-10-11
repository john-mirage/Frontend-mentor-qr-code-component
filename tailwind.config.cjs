/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "hover-device": { "raw": "(hover: hover)" },
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "light-gray": "hsl(212, 45%, 89%)",
      "grayish-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
      "blue": "hsl(216, 95%, 57%)",
    },
    spacing: {
      "8": "0.5rem",
      "16": "1rem",
      "24": "1.5rem",
      "40": "2.5rem",
      "48": "3rem",
    },
    fontSize: {
      "heading": ["1.375rem", {
        lineHeight: "1.75rem",
        letterSpacing: "0.01875rem",
        fontWeight: "700",
      }],
      "body": ["0.9375rem", {
        lineHeight: "1.1875rem",
        letterSpacing: "0.0125rem",
        fontWeight: "400",
      }],
    },
    maxWidth: {
      "320": "20rem",
    },
    borderRadius: {
      "10": "0.625rem",
      "20": "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        "transform-and-opacity": "transform, opacity",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
