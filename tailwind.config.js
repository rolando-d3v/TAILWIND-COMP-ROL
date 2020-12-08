const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        pink: colors.pink,
        orange: colors.orange,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,

        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
  
        "verde-x": {
          50: "#f3fdfd",
          100: "#e7fbfa",
          200: "#c3f4f3",
          300: "#9fedec",
          400: "#56e0dd",
          500: "#0ed3cf",
          600: "#0dbeba",
          700: "#0b9e9b",
          800: "#087f7c",
          900: "#076765",
        },
        azul: {
          100: "#f5f5f5",
          200: "#42424242",
          300: "#18202e",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",

          800: "#10131a",
          900: "#0c0a20",
        },
      },
      fontSize: {
        "31xl": "9rem",
      },
      height: {
        68: "17rem",
        72: "18rem",
        90: "25em",
      },
      width: {
        65: "17rem",
        66: "18rem",
        67: "19rem",
        68: "20rem",
        69: "21rem",
        70: "22rem",
        71: "23rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};




   // fontFamily: {
      //   sans: ["Oswald", "sans-serif"],
      // },