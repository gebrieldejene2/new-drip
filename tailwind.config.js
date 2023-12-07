/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayFont: "#666666",
        darkGray: "#2D2D2D",
        lightGray: "#525050",
        cloud: "#DDDDDD",
        grayBackground: "#CCCBCB",
      },
    },
  },
};
