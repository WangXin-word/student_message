/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 18:21:33
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-10 01:25:33
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/vue.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = {
    publicPath:'/',
    
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        
        port: "8089",
        /* 使用代理 */
        proxy: {
          '/api': {
            /* 目标代理服务器地址 */
            target: process.env.VUE_APP_BASE_URL,
            /* 允许跨域 */
            logLevel:'debug',
            changeOrigin: true,
          },
        },
        disableHostCheck:true
    },
}