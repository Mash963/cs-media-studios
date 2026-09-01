import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#131215",
          soft: "#232125",
          muted: "#55505A",
        },
        paper: {
          DEFAULT: "#F6F5F1",
          alt: "#EFEDE7",
        },
        line: {
          DEFAULT: "#E2DFD6",
          dark: "#2A282E",
        },
        accent: {
          DEFAULT: "#1F3A5F",
          hover: "#172C49",
          ink: "#D87A3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
      letterSpacing: {
        tighter: "-0.035em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(19,18,21,0.04), 0 8px 24px rgba(19,18,21,0.06)",
        lift: "0 12px 32px rgba(19,18,21,0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn: "fadeIn 0.7s ease both",
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ":focus-visible": {
          outline: "2px solid #1F3A5F",
          outlineOffset: "2px",
        },
      });
    },
  ],
};
export default config;
