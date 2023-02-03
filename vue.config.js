const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(1512000).maxAssetSize(1512000)
  },
})
