/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-25 18:31:22
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import {MessageBox,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
Vue.prototype.$message = Message;
Vue.use(vueAxios,axios)

console.log(process.env);

//使用钩子函数对路由进行权限跳转

Vue.config.productionTip = false

Vue.prototype.$axios = axios //将axios绑定到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
