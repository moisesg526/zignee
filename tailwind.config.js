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
      colors: {
        prussianBlue: "#12263A",
        robinEggBlue: "#06BCC1",
        ashGray: "#C5D8D1",
        isabelline: "#F4EDEA",
        lightOrange: "#F4D1AE",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#06BCC1",
          "secondary": "#F4D1AE",
          "accent": "#C5D8D1",
          "neutral": "#12263A",
          "base-100": "#F4EDEA",
          "info": "#06BCC1",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};