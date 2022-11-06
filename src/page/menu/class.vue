<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:24:45
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-02 17:34:23
 * @LastEditors: wyy
 * @Description: 课程
 * @FilePath: /student_sys_vue/src/page/menu/class.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="grade">
    <div class="studentMessageHeader" style="padding: 10px">
      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="班级名称" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)"
            >编辑</el-button
          >

          <el-button type="text" size="small" @click="delContent(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="pageStyle flexBox align-items-center justify-content-right">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size.sync="pageSize"
        :total="totalPage"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <wyy-popupDialog
      :dialogVisible="dialogVisible"
      @closePopup="closePopup"
      :formLabelAlign="formLabelAlign"
      @submit="submit"
    ></wyy-popupDialog>

    <wyy-popupDialog
      title="编辑"
      :dialogVisible="dialogVisibleEidt"
      @closePopup="closePopupEidt"
      :formLabelAlign="formLabelAlignEidt"
      @submit="submitEidt"
    ></wyy-popupDialog>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Pagination } from "element-ui";
import popupDialog from "../../common/popupDialog";
import {
  getClassPageApi,
  addClassApi,
  editClassApi,
  delClassApi,
} from "../../request/api/class";
export default {
  components: {
    elTable: Table,
    elTableColumn: TableColumn,
    elButton: Button,
    elPagination: Pagination,
    wyyPopupDialog: popupDialog,
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      formLabelAlign: {},
      pageSize: 10,
      totalPage: 10,
      currentPage: 1,
      dialogVisibleEidt: false,
      formLabelAlignEidt: {},
    };
  },
  mounted() {
    this.getListPage();
  },
  methods: {
    //获取列表
    getListPage() {
      getClassPageApi({ page: this.currentPage, pageSize: this.pageSize }).then(
        (res) => {
          this.totalPage = res.total;
          this.tableData = res.records;
        }
      );
    },

    add() {
      this.dialogVisible = true;
      this.formLabelAlign = {
        item: [{ name: "班级名称", inputContent: "" }],
      };
    },
    edit(row) {
      console.log(row);
      this.dialogVisibleEidt = true;
      this.formLabelAlignEidt = {
        item: [{ name: "班级名称", inputContent: row.name, id: row.id }],
      };
    },
    closePopup() {
      this.dialogVisible = false;
    },
    closePopupEidt() {
      this.dialogVisibleEidt = false;
    },
    submit(item) {
      console.log(item.item[0].inputContent);
      addClassApi({ name: item.item[0].inputContent }).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.getListPage();
          this.closePopup();
          this.$message({
            message: res.data,
            type: "success",
          });
        } else {
          this.$message({
            message: "添加失败，请稍后重试",
            type: "error",
          });
        }
      });
    },
    submitEidt(item) {
      console.log(item);
      editClassApi({
        id: item.item[0].id,
        name: item.item[0].inputContent,
      }).then((res) => {
        if (res.code == 200) {
          this.getListPage();
          this.closePopupEidt();
          this.$message({
            message: res.data,
            type: "success",
          });
        } else {
          this.$message({
            message: "添加失败，请稍后重试",
            type: "error",
          });
        }
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getListPage();
    },
    delContent(row) {
      console.log(row);
      this.$confirm("您确定删除此条数据？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delClassApi(row.id).then((res) => {
            if (res.code == 200) {
              this.getListPage();
              this.$message({
                message: res.data,
                type: "success",
              });
            } else {
              this.$message({
                message: "删除失败，请稍后重试",
                type: "error",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.pageStyle {
  width: 100%;
  height: 60px;
}
</style>