const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const Webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV == 'production' ? './' : '/',
  productionSourceMap: false,
  outputDir: 'smart_sand_webapp',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        // host: 'dczxxy.natappfree.cc',
        // port: 80,
        target: 'http://test.sxzichen.com/smart_sand/',
        // target: 'http://www.educvip.com/smart_sand/',
        // target: 'http://p28mje.natappfree.cc/smart_sand/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch'); //关闭预先加载模块
    if(process.env.NODE_ENV === 'production') {
      if(process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
      }

    };
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('static', resolve('src/static'))
      .set('view', resolve('src/views'))
      .set('utils', resolve('src/utils'))
      .set('http', resolve('src/api'))
      .set('http2', resolve('src/api/index2'))
      .set('api', resolve('src/api/api'))
  },
  configureWebpack: (config) => {
    if(process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';

      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10k的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
          }),
          new Webpack.optimize.ModuleConcatenationPlugin()
        ],
        // externals: {
        // 'vue-router': 'VueRouter',
        // 'vuex': 'Vuex',
        // 'axios': 'axios',
        // 'element-ui': 'ELEMENT',
        // }

      }
    }
  },
}