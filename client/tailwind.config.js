/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure index.html is included
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all React and TypeScript files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ['Bebas Neue', 'serif'],
        kanit: ['Kanit', 'serif']
      },
    },
  },
  plugins: [],
}

