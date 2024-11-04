/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
              opacity: 0,
          },
          "100%": {
              opacity: 1
          },
      },
      "fade-out": {
          "0%": {
              opacity: 1
          },
          "100%": {
              opacity: 0
          },
      },
      },
      animation: {
        fadein: 'fade-in 0.8s ease-in-out forwards',
        fadeout: 'fade-out 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
};
