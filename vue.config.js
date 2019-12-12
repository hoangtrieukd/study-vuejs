module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#396500",
          "secondary-color": "#151B22",
          "accent-color": "#8DC63F"
        },
        javascriptEnabled: true
      },
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
};
