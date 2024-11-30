/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "purple-100": "#dacffc",
        "purple-500": "#7650dc",
        "yellow-100": "#f9eee1",
        "yellow-500": "#ffcb6b",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      lineHeight: {
        tight: "1.1",
      },
    },
  },
  plugins: [],
};
