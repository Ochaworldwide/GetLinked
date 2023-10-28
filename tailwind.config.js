/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      "mobile":{'max': '768px'}

    },
    extend: {
    },
  },
  plugins: [],
};
