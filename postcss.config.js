module.exports = {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions'],
        grid: true,
        replace: {
          'color-adjust': 'print-color-adjust'
        }
      }
    }
  };
  