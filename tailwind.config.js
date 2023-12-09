/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#2D2D2D",
        lightGray: "#525050",
        cloud: "#DDDDDD",
      },
    },
  },
};
