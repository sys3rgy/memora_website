/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DD9682",
        secondary: "#2D5148",
        primaryLight: "#FABEAB",
        primaryDark: "#C47864",
        primaryDarkest: "#AA5B49",
        secondaryLight: "#416860",
        secondaryLightest: "#5D8881",
        secondaryDark: "#204239",
      },
      fontFamily: {
        chillaxRegular: "Chillax-Regular, serif",
        chillaxLight: "Chillax-Light, serif",
        chillaxExtraLight: "Chillax-Extralight, serif",
        chillaxMedium: "Chillax-Medium, serif",
        chillaxBold: "Chillax-Bold, serif",
      },
      spacing: {
        368: "23rem",
        920: "57.85rem",
        412: "25.75rem",
        624: "39rem",
        640: "40rem",
        656: "41rem",
        696: "43.5rem",
        783: "48.94rem",
        512: "32rem",
        704: "44rem",
      },
      borderRadius: {
        32: "2rem",
      },
    },
  },
  plugins: [],
};
