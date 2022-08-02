/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first-page": "#C08552",
      },
    },
  },
  plugins: [],
};
