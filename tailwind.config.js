/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chimex-red': '#DC143C',
        'chimex-blue': '#0099FF',
        'chimex-dark': '#1a1a1a',
        'chimex-light': '#f8f8f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
