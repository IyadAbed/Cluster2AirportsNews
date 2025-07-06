/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#13a49e",
          50: "#f0fdfc",
          100: "#ccfbf7",
          200: "#99f6f0",
          300: "#5eebe6",
          400: "#2dd4d4",
          500: "#13a49e",
          600: "#0d8b87",
          700: "#0f706d",
          800: "#115a58",
          900: "#134e4a",
        },
        gray: {
          50: "#f7f8f9",
          100: "#e3e5e7",
          200: "#c6cbd1",
          300: "#a5a49d",
          400: "#919497",
          500: "#848270",
          600: "#645f53",
          700: "#4a453c",
          800: "#3a342c",
          900: "#1d1d1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "Tajawal", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
