import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ff5733", 
          dark: "#e03e00",
        },
        secondary: {
          light: "#33c1ff", 
          dark: "#1a90cc", 
        },
        accent: {
          light: "#ffc133", 
          dark: "#cc9f1a", 
        },
        background: {
          light: "#f0f0f0", 
          dark: "#18191B", 
        },
        secondaryBackground: {
          light: "#f0f0f0", 
          dark: "#101011", 
        },
        text: {
          light: "#333333", 
          dark: "#e0e0e0", 
        },
        border: {
          light: "#cccccc",
          dark: "#444444", 
        },
        success: {
          light: "#28a745",
          dark: "#1e7e34", 
        },
        warning: {
          light: "#ffc107", 
          dark: "#e0a800", 
        },
        error: {
          light: "#dc3545",
          dark: "#bd2130",
        },
      },
    },
  },
  plugins: [],
};
export default config;
