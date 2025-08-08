/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#343A40',
          dark: '#212529',
          light: '#6C757D',
        },
        accent: '#D4A373',
        text: {
          primary: '#495057',
          secondary: '#6C757D',
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

