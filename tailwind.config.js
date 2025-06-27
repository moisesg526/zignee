/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js",
    "./routes/**/*.js",
    "./controllers/**/*.js",
  ],
  theme: {
    extend: {
      // color: {
      //   primary: "#12263a",
      //   secondary: "#f4d1ae",
      //   accent: "#06BCC1",
      //   neutral: "#b9d0c8",
      //   " base-100": "#f4edea",
      //   success: "#36d399",
      //   warning: "#fbbd23",
      //   error: " #f87272",
      // },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
};
