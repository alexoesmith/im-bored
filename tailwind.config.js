module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    extend: {
      colors: {
        body: "#eff0f3",
        "body-dark": "#16161a",
        action: "#ff8e3c",
        "action-dark": "#f25f4c",
      },
      fontFamily: {
        body: ["Space Grotesk"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
