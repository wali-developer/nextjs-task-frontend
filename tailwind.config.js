/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        harmony: ["var(--font-harmony)"],
      },
      colors: {
        dodgerBlue: "#646FF3",
        lightBg: "#F2F2F2",
        darkText: "#121212",
      },
    },
  },
  plugins: [],
};
