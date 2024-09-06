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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-dark": "#1B1B1B",
        "gradient-blue": "#3B95FF2B",
        desc: " #FCF1BB",
        "primary-blue": "#5AA5FD",
      },
    },
  },
  plugins: [],
};
export default config;
