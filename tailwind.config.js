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
          DEFAULT: "#FFFFFF",
          dark: "#F8FAFC",
        },
        gold: {
          DEFAULT: "#0284C7", // Sky-600 (Ice Blue Highlight)
          dark: "#0369A1", // Sky-700
          light: "#E0F2FE", // Sky-100 (Ice Blue Light)
        },
        sage: {
          DEFAULT: "#F0F9FF",
          dark: "#0284C7",
          light: "#E0F2FE",
        },
        espresso: {
          DEFAULT: "#0F172A", // Dark Navy
          light: "#1E293B",
          muted: "#64748B",
        },
        "warm-white": "#FFFFFF",
        pearl: "#FFFFFF",
        champagne: {
          DEFAULT: "#0284C7",
          light: "#E0F2FE",
        },
        "velvet-espresso": "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
