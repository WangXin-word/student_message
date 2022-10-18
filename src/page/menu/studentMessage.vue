<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:24:45
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-08 16:51:40
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/studentMessage.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="studentMessage">
    
    <div class="studentMessageHeader" style="padding: 10px">
      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <el-table :data="menu" style="width: 100%">
      <el-table-column prop="id" label="Id" width="180"> </el-table-column>
      <el-table-column prop="name" label="页面名称" width="180">
      </el-table-column>
      <el-table-column prop="path" label="页面地址" width="180">
      </el-table-column>
      <el-table-column prop="meta.title" label="信息元"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
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
import { mapState } from "vuex";
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
      dialogVisible: false,
      formLabelAlign: {},
    };
  },
  computed: {
    ...mapState(["menu"]),
  },
  created() {},
  methods: {
    handleClick() {},
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

<style lang="less" scoped>
</style>