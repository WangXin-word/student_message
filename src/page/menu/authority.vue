<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:24:45
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-13 00:47:33
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/authority.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="authority">
    <el-table :data="menu" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {Table,TableColumn} from 'element-ui'
import {mapState} from 'vuex'
export default {
  components:{
    elTable:Table,
    elTableColumn:TableColumn
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  comments:{
    ...mapState["menu"]
  },
  mounted(){

  },
  methods:{
    getMenu(){

    }
  }
};
</script>

<style>
</style>