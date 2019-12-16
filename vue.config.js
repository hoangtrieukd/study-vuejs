module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#323232",
          "accent-color": "#20A4B8",
          "secondary-color": "#234094"
        },
        javascriptEnabled: true
      },
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
};
