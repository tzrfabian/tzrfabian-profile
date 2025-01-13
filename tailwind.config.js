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
      "slide-in-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "slide-in-right": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      }
      },
      animation: {
        fadein: 'fade-in 0.8s ease-in-out forwards',
        fadeout: 'fade-out 0.8s ease-out forwards',
        slideinleft: 'slide-in-left 0.8s ease-in-out forwards',
        slideinright: 'slide-in-right 0.8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
