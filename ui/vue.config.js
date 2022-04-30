module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },
  transpileDependencies: ['quasar'],
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
}
