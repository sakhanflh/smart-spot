/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2C2F36',
        'secondary': '#42474E',
        'accent': '#E63946',
        'background-color': '#1E2126',
        'text': '#F1F5F9',
        'hover': '#4CC9F0',
      },
      fontFamily: {
        "jost": '"Jost", sans-serif',
      },
    },
  },
  plugins: [],
}

