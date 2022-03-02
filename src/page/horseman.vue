<!--
 * @Author: 汪鑫
 * @Date: 2022-02-13 23:08:20
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-15 17:32:38
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/page/horseman.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="user">
    <div class="user-header">
        <div>蚁人科技</div>
        <el-button type="primary">新增</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { Button, Table, TableColumn } from "element-ui";
export default {
  name: "user",
  components: {
    elButton: Button,
    elTable: Table,
    elTableColumn: TableColumn,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  .user-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    // padding-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>