// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/dist/',
    // https://rawgit.com/wh-Coder/resume/master/dist/index.html
    assetsPublicPath: '/wh-Coder/resume/master/dist/',

    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 7070,
    // autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/handle': {
        target: 'http://wx.100xuexi.com',
        changeOrigin: true,
        pathRewrite: {
          '^handle': 'handle'
        }
        // !!!注意:这里不能用'app'开头
        // '/AppEbookQuery': {
        //   target: 'http://app.100xuexi.com/app',
        //   changeOrigin: true,
        //   pathRewrite: {
        //     '^AppEbookQuery': 'AppEbookQuery'
        //   }
      },
      '/BookGift': {
        target: 'http://service.100eshu.com',
        changeOrigin: true,
        pathRewrite: {
          '^BookGift': 'BookGift'
        }
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
