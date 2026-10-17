import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          oak: "#C89D7C",
          wood: "#A47551",
          beige: "#F9F6F0",
          cream: "#F3EDE2",
          dark: "#2C221E",
          accent: "#D4AF37",
        },
      },
    },
  },
  plugins: [],
};
export default config;
