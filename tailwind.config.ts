import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#09090b",
        nav: "#18181b",
        text: "#d4d4d8",
        heading: "#ececef",
        faded: "#71717a",
        card_hover: "#27272a99",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
      },
      animation: {
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
