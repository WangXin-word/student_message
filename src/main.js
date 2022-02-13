/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-11 11:12:45
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
Vue.use(vueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
