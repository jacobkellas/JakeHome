module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  transpileDependencies: ['quasar'],
  pwa: {
    name: 'Jake Home',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCache: 'yes',
    appleMobileWebAppStatusBarStyle: '#000000',
    // workboxOptions: {
    //   navigateFallback: '/index.html',
    // },
  },
}
