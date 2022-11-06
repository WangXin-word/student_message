<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:24:45
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-02 10:18:10
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/grade.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="grade">
    <div class="studentMessageHeader" style="padding: 10px">
      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>

    <wyy-popupDialog
      :dialogVisible="dialogVisible"
      @closePopup="closePopup"
      :formLabelAlign="formLabelAlign"
    ></wyy-popupDialog>
  </div>
</template>

<script>
import { Table, TableColumn, Button } from "element-ui";
import popupDialog from "../../common/popupDialog";
export default {
  components: {
    elTable: Table,
    elTableColumn: TableColumn,
    elButton: Button,
    wyyPopupDialog: popupDialog,
  },
  data() {
    return {
      tableData: [
        
      ],
      dialogVisible: false,
      formLabelAlign: {},
    };
  },
  methods: {
    add() {
      this.dialogVisible = true;
       this.formLabelAlign = {
        item: [
          { name: "页面名称", inputContent: "1" },
          { name: "页面地址", inputContent: "2" },
          { name: "信息元", inputContent: "3" },
        ],
      };
    },
        closePopup() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
</style>