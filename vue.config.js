module.exports = {
  publicPath: "/training/",
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "es",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
