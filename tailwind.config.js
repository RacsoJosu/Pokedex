/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    variants: {
       extend: {
        // ...
       backgroundOpacity: ['active'],
      }
    },
    extend: {},
  },
  plugins: [],
}