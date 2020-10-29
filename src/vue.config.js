module.exports = {
    devServer: {
        proxy: {  //配置跨域
            '/api': {
                target: 'https://catfront.dianping.com'  //这里后台的地址模拟的;应该填写你们真实的后台接口
                ,changeOrigin: true
            }
        }
    }
}