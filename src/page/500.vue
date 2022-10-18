<!--
 * @Author: wyy
 * @Date: 2022-09-10 00:44:15
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-10 00:44:42
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/500.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="error-page">
    <div class="error-code">5<span>0</span>0</div>
    <div class="error-desc">啊哦~ 服务器错误</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
      <el-button class="error-btn" type="primary" size="large" @click="goBack"
        >返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  components: {
    elButton: Button,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  box-sizing: border-box;
}
.error-code {
  line-height: 1;
  font-size: 250px;
  font-weight: bolder;
  color: #2d8cf0;
}
.error-code span {
  color: #00a854;
}
.error-desc {
  font-size: 30px;
  color: #777;
}
.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn {
  margin-left: 100px;
}
</style>
