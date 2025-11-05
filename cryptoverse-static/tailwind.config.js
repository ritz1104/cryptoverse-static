/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Original colors
        "primary": "#0dccf2",
        "background-light": "#f5f8f8",
        "background-dark": "#101f22",

        // New colors from Details page
        "navy-blue": "#0D1120",
        "dark-purple": "#1A1035",
        "electric-cyan": "#00FFFF",
        "vibrant-magenta": "#BE2EDD",
        "off-white": "#E0E0E0",
        "light-gray": "#A0A0A0",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        // New shadows from Details page
        'glow-cyan': '0 0 15px 0 rgba(0, 255, 255, 0.4)',
        'glow-magenta': '0 0 15px 0 rgba(190, 46, 221, 0.4)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

