/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add your custom "babybear" breakpoint
        babybear: '480px', // Example: Targets screens 480px wide or smaller
      },
    },
  },
  plugins: [],
}