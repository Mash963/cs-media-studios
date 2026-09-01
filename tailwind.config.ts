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
          DEFAULT: "#0F0F12",
          soft: "#1A1A1E",
          muted: "#55505A",
          graphite: "#232125",
        },
        paper: {
          DEFAULT: "#F6F5F1",
          alt: "#EFEDE7",
          warm: "#F2F0E9",
        },
        line: {
          DEFAULT: "#E2DFD6",
          dark: "#2A282E",
          gold: "rgba(197,165,114,0.18)",
        },
        accent: {
          DEFAULT: "#1F3A5F",
          hover: "#172C49",
          ink: "#D87A3C",
          gold: "#C5A572",
          goldHover: "#B8955E",
          red: "#8B1E24",
          redSoft: "#C0392B",
        },
        gold: {
          DEFAULT: "#C5A572",
          soft: "#D4B896",
          deep: "#8B7355",
          faint: "rgba(197,165,114,0.12)",
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
        studio: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,15,18,0.06), 0 8px 24px rgba(15,15,18,0.08)",
        lift: "0 12px 32px rgba(15,15,18,0.18)",
        gold: "0 0 0 1px rgba(197,165,114,0.15), 0 8px 24px rgba(15,15,18,0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn: "fadeIn 0.8s ease both",
        lineGrow: "lineGrow 1.1s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ":focus-visible": {
          outline: "2px solid #C5A572",
          outlineOffset: "2px",
        },
      });
    },
  ],
};
export default config;
