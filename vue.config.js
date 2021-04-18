module.exports = {
    　　　　devServer: {
    　　　　　　open: true,
    　　　　　　proxy: {  //配置跨域
    　　　　　　　　'/api': {
    　　　　　　　　　　target: 'https://api.sdbairui.com',  //这里后台的地址模拟的;应该填写你们真实的后台接口
    　　　　　　　　　　ws: true,
    　　　　　　　　　　changOrigin: true,  //允许跨域
    　　　　　　}
    　　　　}
    　　}
    }
    