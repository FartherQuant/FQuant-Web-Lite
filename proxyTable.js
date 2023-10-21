module.exports = {
  devServer: {
    proxy: {
      '/northdata': {
        target: 'https://data.hexin.cn/market/hsgtApi/method/dayChart/', // 目标地址
        changeOrigin: true, // 跨域访问设置，true代表跨域
        
      }
    }
  }
}
