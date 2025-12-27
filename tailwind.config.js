/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d4a5c7",
          light: "#e8c7d8",
          dark: "#b88ca3",
        },
        secondary: "#c4a9d4",
      },
    },
  },
  plugins: [],
};
