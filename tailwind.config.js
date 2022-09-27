/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        nav: "#232f3e",
        customGreen: "#007600",
        link: "#007185"
      },
      borderWidth: {
        '10': '10px',
        '24': '24px'
      },
      spacing : {
        '68': '17rem'
      }
    },
  },
  plugins: [],
}
