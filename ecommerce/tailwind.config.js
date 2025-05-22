/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css", // ✅ Keep this if you're using external CSS
  ],
  darkMode: "class", // ✅ Add this line to enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
