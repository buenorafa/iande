/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'xl': '450px',
      }
    },
  },
  plugins: [],
};
