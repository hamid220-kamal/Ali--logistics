/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF7F0",
          dark: "#F2EDE3",
        },
        gold: {
          DEFAULT: "#F4E0B9",
          dark: "#E5C98A",
          light: "#FBF2E0",
        },
        sage: {
          DEFAULT: "#D4E2D5",
          dark: "#A8C5AA",
          light: "#E8F0E9",
        },
        espresso: {
          DEFAULT: "#2C2523",
          light: "#4A3F3C",
          muted: "#7A6E6B",
        },
        "warm-white": "#FFFDF9",
      },
      fontFamily: {
        sans: ["var(--font-sans-custom)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display-custom)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
