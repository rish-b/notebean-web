/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#787775",
        secondary:  "#97978f",
        accent:     "#c4b3a9",
        surface:    "#e1e2e6",
        background: "#ebebeb",
        'text-primary':   "#1a1614",
        'text-secondary': "#4a4a48",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(135deg, #ebebeb 0%, #c4b3a9 100%)",
      },
    },
  },
  plugins: [],
}
