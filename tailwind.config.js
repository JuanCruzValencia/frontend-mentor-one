/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#FF6666",
      green: "#33CC99",
      blue: "#333399",
      dblue: "#333333",
      gblue: "#9999CC",
      white: "#ffffff",
      grey: "#777777",
      dgreen: "#29a37a",
      lgreen: "#85e0c2",
    },
    fontSize: {
      s: 14,
      m: 16,
      l: 20,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    extend: {
      backgroundImage: {
        "main-mobile": "url('/src/assets/bg-intro-mobile.png')",
        "main-desktop": "url('/src/assets/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
