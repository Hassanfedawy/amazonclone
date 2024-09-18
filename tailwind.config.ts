import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode (Amazon-Inspired Colors)
        lightNav: "#ffffff",        // White background for nav
        lightBg: "#f3f4f6",         // Amazon light gray background
        lightCardBg: "#ffffff",     // White background for product cards
        lightText1: "#232F3E",      // Amazon dark gray (primary text)
        lightText2: "#555555",      // Amazon gray (secondary text)
        lightButtonsBg: "#FF9900",  // Amazon orange (CTA button background)
        lightButtonsText: "#ffffff",// White button text
        lightHoverButtonsBg: "#FFB84D", // Lighter orange for hover state
        
        // Dark Mode (Amazon-Inspired Colors)
        darkNav: "#232F3E",         // Amazon dark gray for dark mode nav
        darkBg: "#131A22",          // Dark background for dark mode
        darkCardBg: "#1A1F25",      // Darker background for product cards
        darkText1: "#E0E0E0",       // Light gray text for dark mode
        darkText2: "#B0B0B0",       // Medium gray for secondary text
        darkButtonsBg: "#FF9900",   // Amazon orange for dark mode buttons
        darkButtonsText: "#000000", // Black button text
        darkHoverButtonsBg: "#FFB84D", // Lighter orange hover state in dark mode
      },
    },
  },
  plugins: [],
};

export default config;
