<!--
 * @Author: 汪鑫
 * @Date: 2022-02-13 23:08:20
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-03-02 17:54:14
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/page/user.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="user">
    <div class="user-header">
      <div>搬象科技</div>
      <el-button type="primary">新增</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="job_number" label="工号" width="120" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" align="center">
          <template slot-scope="scope">
          {{scope.row.name}}
        </template>
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="120" align="center">
        </el-table-column>
        <el-table-column prop="birthday" label="生日" width="120" align="center">
        </el-table-column>
        <el-table-column prop="avatar" label="头像" width="120" align="center">
          <template slot-scope="scope">

          </template>
        </el-table-column>
        <el-table-column prop="id_card" label="身份证号" width="240" align="center">
        </el-table-column>
        <el-table-column prop="front_card" label="身份证正面" width="240" align="center">
        </el-table-column>
        <el-table-column prop="reverse_card" label="身份证反面" width="240" align="center">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120" align="center">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="120" align="center"> 
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
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
          job_number: "2016-05-02",
          name: "王小虎",
          phone: "上海",
          birthday: "普陀区",
          avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xiaohongshu.com%2Fmobile%2Ftags%2F2296528783718754367%3Fname%3D%25E4%25B8%2589%25E4%25BA%25BA%25E9%2597%25BA%25E8%259C%259C%25E5%25A4%25B4%25E5%2583%258F%25E7%25B4%25AB%25E8%2589%25B2%25E7%25B3%25BB&psig=AOvVaw1eb2GnCS2U--av_TOhS5dX&ust=1646300989144000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjcoKGTp_YCFQAAAAAdAAAAABAP",
          id_card: "34082519990404041X",
          front_card: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xiaohongshu.com%2Fmobile%2Ftags%2F2296528783718754367%3Fname%3D%25E4%25B8%2589%25E4%25BA%25BA%25E9%2597%25BA%25E8%259C%259C%25E5%25A4%25B4%25E5%2583%258F%25E7%25B4%25AB%25E8%2589%25B2%25E7%25B3%25BB&psig=AOvVaw1eb2GnCS2U--av_TOhS5dX&ust=1646300989144000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjcoKGTp_YCFQAAAAAdAAAAABAP",
          reverse_card: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xiaohongshu.com%2Fmobile%2Ftags%2F2296528783718754367%3Fname%3D%25E4%25B8%2589%25E4%25BA%25BA%25E9%2597%25BA%25E8%259C%259C%25E5%25A4%25B4%25E5%2583%258F%25E7%25B4%25AB%25E8%2589%25B2%25E7%25B3%25BB&psig=AOvVaw1eb2GnCS2U--av_TOhS5dX&ust=1646300989144000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjcoKGTp_YCFQAAAAAdAAAAABAP",
          sex: 22,
          email: "1594566468@qq.com",
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