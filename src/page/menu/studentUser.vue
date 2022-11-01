<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:24:45
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-11 20:12:45
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/grade.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="studentUser">
    <div class="studentMessageHeader" style="padding: 10px">
      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <wyy-popupDialog
      :dialogVisible="dialogVisible"
      @closePopup="closePopup"
      :formLabelAlign="formLabelAlign"
      :title="popupDialogTitle"
      @submit="updateList"
    ></wyy-popupDialog>

  </div>
</template>

<script>
import { Table, TableColumn, Button } from "element-ui";
import popupDialog from "../../common/popupDialog";
import { getStudentList } from "../../request/api/student";
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
      popupDialogTitle:"",
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
  created(){
    getStudentList().then(res => {
      console.log(res);
    })
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    //
    add() {
      this.dialogVisible = true;
    },

        //弹框点击确认
    updateList(item){
      console.log(item.item);
        let postCont = {
          id:item.item[0].inputContent,
          name:item.item[1].inputContent,
          meta:`{"title":"${item.item[3].inputContent}"}`,
          sortMenu:item.item[4].inputContent
        }
        console.log(postCont);
        updateMenuApi(postCont).then(res => {
          console.log(res);
          if(res.code == 200){
            
          }
        })
    },
    //关闭弹框
    closePopup() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
</style>