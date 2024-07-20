module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [">1%", "last 4 versions"],
      grid: true,
      replace: {
        "color-adjust": "print-color-adjust",
      },
    }),
  ],
};
