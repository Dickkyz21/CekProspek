import type { Config } from "tailwindcss";

// Warna diambil dari variabel CSS pada template: --good, --warn, --cold, dan biru aksen.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        good: "var(--good)",
        warn: "var(--warn)",
        cold: "var(--cold)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
