import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        fg: "rgb(var(--fg))",
        muted: "rgb(var(--muted))",
        card: "rgb(var(--card))",
        border: "rgb(var(--border))",
        accent: "rgb(var(--accent))",
        accent2: "rgb(var(--accent2))",
        success: "rgb(var(--success))",
        warning: "rgb(var(--warning))"
      },
      boxShadow: {
        soft: "0 20px 50px -30px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px -20px rgba(0,0,0,0.6)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      }
    }
  },
  plugins: []
};

export default config;