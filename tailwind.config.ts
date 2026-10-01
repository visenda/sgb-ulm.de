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
        /** Primary CI colour: CMYK 90/0/0/0 ≈ #76C5EE */
        brand: {
          50: "#f0f9fe",
          100: "#ddf1fc",
          200: "#bfe5f9",
          300: "#98d5f4",
          400: "#76c5ee",
          500: "#4fb0e3",
          600: "#2f97cf",
          700: "#267bab",
          800: "#24668c",
          900: "#225674",
          950: "#16384d",
        },
        /** Secondary CI colour: #434242 */
        accent: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5a5a5a",
          700: "#4f4f4f",
          800: "#434242",
          900: "#333232",
          950: "#1f1f1f",
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
