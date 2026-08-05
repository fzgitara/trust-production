import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark-elegant premium palette
        ink: {
          950: "#0a0a0b",
          900: "#121214",
          800: "#1c1c1f",
          700: "#26262b",
          600: "#33333a",
        },
        // Warm accent (amber/bronze) for CTAs and highlights
        signal: {
          500: "#d4a24a",
          400: "#e0b25c",
          600: "#b88735",
        },
        mist: {
          100: "#f6f5f2",
          200: "#ebe9e4",
          300: "#dedcd5",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
