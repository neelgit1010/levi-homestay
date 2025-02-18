/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "defined-green": "#6CB016",
        "defined-orange": "#FF8400",
        "defined-blue": "#0A3E59",
      },
      boxShadow: {
        "custom-light": "5px 0px 8px 0px rgba(0, 0, 0, 0.05)",
        custom: "rgba(0, 0, 0, 0.35) 0px 2px 7px",
      },
      screens: {
        sm: "280px",
        md: "760px",
        lg: "1024px",
        xlg: "1280px",
        xl: "1440px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};
