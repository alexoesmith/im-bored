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
        body: "#fef6e4",
        "body-dark": "#16161a",
        action: "#c3f0ca",
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
