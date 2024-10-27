/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "light-blue": "#3C79B4",
        "lighter-blue": "#CFE0EC",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(135deg, #94BBE8, #5BBBCA)",

        "gradient-rainblue": "linear-gradient(135deg, #94BBE8, #5BBBCA)",
      }),
      fontFamily: {
        playfiar: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans=serif"],
      },
      content: {
        brush: "url('../public/assets/brush.png')",
        person1: "url('../assets/person-1.png')",
        person2: "url('../assets/person-2.png')",
        person3: "url('../assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
