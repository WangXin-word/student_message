<!--
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-10 18:19:21
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/views/Home.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="home">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>

import { Button } from 'element-ui'
export default {
  name: 'Home',
  components:{
    elButton:Button
  }
}
</script>
