module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],     配置css,js
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}