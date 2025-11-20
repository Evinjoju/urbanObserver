import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        "background-light": "#ffffff",
        "background-dark": "#18181b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Added Inter as default sans-serif for body/nav
        display: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;