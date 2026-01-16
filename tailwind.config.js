/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#F5F2ED',
          DEFAULT: '#E8E3DB',
          dark: '#D4CFC7',
        },
        blue: {
          light: '#E5F1F7',
          DEFAULT: '#D4E5ED',
          dark: '#B8D4E0',
        },
      },
    },
  },
  plugins: [],
}