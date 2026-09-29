import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#eef8fb",
          100: "#d5edf5",
          200: "#aedceb",
          300: "#78c3dc",
          400: "#3ba1c5",
          500: "#1f83aa",
          600: "#1b6a90",
          700: "#1c5675",
          800: "#1d4861",
          900: "#123345",
          950: "#0a2130",
        },
        accent: {
          50: "#eafaf5",
          100: "#cff3e8",
          200: "#a2e6d3",
          300: "#6bd3b9",
          400: "#38b89b",
          500: "#179d83",
          600: "#0c7e6a",
          700: "#0c6457",
          800: "#0d5046",
          900: "#0d423b",
        },
        sand: {
          50: "#faf8f5",
          100: "#f3efe7",
          200: "#e7dfd1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(10, 33, 48, 0.18)",
        card: "0 2px 6px -1px rgba(10, 33, 48, 0.06), 0 12px 30px -12px rgba(10, 33, 48, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
