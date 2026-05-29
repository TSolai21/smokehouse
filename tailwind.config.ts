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
          black: "#0A0A0A",
          charcoal: "#141414",
          dark: "#1A1A1A",
          card: "#1E1E1E",
          border: "#2A2A2A",
          orange: "#E85D04",
          "orange-light": "#F48C06",
          "orange-dark": "#C44502",
          red: "#DC2626",
          cream: "#F5F0E8",
          "cream-muted": "#C9B99A",
          gold: "#D4A017",
        },
      },
      fontFamily: {
        display: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "orange-glow": "radial-gradient(circle at center, #E85D04 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-orange": "0 0 40px rgba(232, 93, 4, 0.3)",
        "glow-orange-lg": "0 0 80px rgba(232, 93, 4, 0.4)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
