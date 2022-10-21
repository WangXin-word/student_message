<!--
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-13 12:07:17
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/App.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { getMenuApi } from "./request/api/menu";
import { asyncRouter } from "./router/index";
import {Loading} from "element-ui"
export default {
  beforeCreate() {
    // if (localStorage.getItem("userInfo")) {
    //   getMenuApi().then((res) => {
    //     if (res && res != "[]") {
    //       res.map((item, index, arr) => {
    //         item.meta = JSON.parse(item.meta);
    //         item.component = () => import(`./page/menu/${item.path}.vue`);
    //       });
    //       asyncRouter[1].children = res;

    //       this.$router.addRoutes(asyncRouter);
    //       console.log(asyncRouter);
    //       this.$store.commit("changeMenu", res);
    //       this.$router.push("/");
    //     }
    //   });
    // }
  },
};
</script>

<style lang="less">
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css"; /*深色主题*/
@import "./assets/css/theme-green/color-green.css"; /* 浅绿色主题*/
@import "./assets/index.less";
</style>
