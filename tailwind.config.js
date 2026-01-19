/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        primary: "#38bdf8",
        secondary: "#94a3b8"
      }
    },
  },
  plugins: [],
}
