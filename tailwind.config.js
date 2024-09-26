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
        "gray-border-color": "#E2E4E1",
        "gray-background-color": "#f5f6f5",
        "hover-main": "#126e5d",
        "active-main": "#0fac8e",
        error: "#da3232",
        "secondary-price": "#8f0707",
      },
    },
  },
  plugins: [],
};
