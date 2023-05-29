// rspack.config.js
const { VueLoaderPlugin } = require('vue-loader')
const AutoImport = require('unplugin-auto-import/rspack')
const Components = require('unplugin-vue-components/rspack')

module.exports = {
  builtins: {
    html: [{ template: './src/index.html' }]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    AutoImport({
      dts: false,
      imports: ['vue']
    }),
    Components({
      dts: false
    })
  ]
}
