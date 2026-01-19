export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0b1220",
        primary: "#38bdf8",
        secondary: "#94a3b8",
        card: "rgba(255,255,255,0.04)"
      },
      fontSize: {
        xs: ["0.75rem", "1.1"],
        sm: ["0.875rem", "1.4"],
        base: ["1rem", "1.7"],
        lg: ["1.125rem", "1.75"],
        xl: ["1.25rem", "1.8"],
        "2xl": ["1.5rem", "1.9"],
        "3xl": ["1.875rem", "2.1"],
        "4xl": ["2.25rem", "2.3"],
        "5xl": ["3rem", "2.5"]
      }
    },
  },
  plugins: [],
}
