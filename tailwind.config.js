/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,scss}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      width: "1392px",
    },
    extend: {
      colors: {
        main: "#10594e",
        "hover-main": "#126e5d",
        error: "#da3232",
        "secondary-price": "#8f0707",
      },
    },
  },
  plugins: [],
};
