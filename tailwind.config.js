/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.md"],
  theme: {
    extend: {
      colors: {
        "primary-white": "hsl(0, 0%, 98%)",
        "primary-gray": "hsl(0, 0%, 41%)",
        "primary-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
}
