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
          transform: "translateX(50px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "slide-in-right": {
        "0%": {
          transform: "translateX(-50px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "fade-in-bounceup": {
        "0%": {
          transform: "translateY(100%)",
          opacity: 0,
        },
        "33%": {
          transform: "translateY(0)",
          opacity: 0.5,
        },
        "66%": {
          transform: "translateY(20%)",
          opacity: 0.7,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1
        }
      },
      "fade-slide-up": {
        "0%": {
          transform: "translateY(30px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "fade-slide-down": {
        "0%": {
          transform: "translateY(-30px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "slide-down": {
        "0%": {
          transform: "translateY(-100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "slide-up": {
        "0%": {
          transform: "translateY(0)",
          opacity: 1,
        },
        "100%": {
          transform: "translateY(-100%)",
          opacity: 0,
        },
      }
      },
      animation: {
        fadein: 'fade-in 0.8s ease-in-out forwards',
        fadeout: 'fade-out 0.8s ease-out forwards',
        slideinleft: 'slide-in-left 0.8s ease-in-out forwards',
        slideinright: 'slide-in-right 0.8s ease-in-out forwards',
        fadeinbounceup: 'fade-in-bounceup 0.8s ease-in-out forwards',
        fadeslideup: 'fade-slide-up 0.6s ease-out forwards',
        fadeslidedown: 'fade-slide-down 0.6s ease-out forwards',
        slidedown: 'slide-down 0.3s ease-out forwards',
        slideup: 'slide-up 0.3s ease-out forwards'
      }
    },
  },
  plugins: [],
};
