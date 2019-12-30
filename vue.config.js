module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#20A4B8", //ace
          "accent-color": "#234094", //sd
          "secondary-color": "#323232" //pr
        },
        javascriptEnabled: true
      },
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
};
