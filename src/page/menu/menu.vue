<!--
 * @Author: wyy
 * @Date: 2022-09-30 15:32:53
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-13 12:12:04
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/menu.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="menu">
    <!-- <div class="studentMessageHeader" style="padding: 10px">
      <el-button type="primary" @click="add">添加</el-button>
    </div> -->

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
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <wyy-popupDialog
      :dialogVisible="dialogVisible"
      @closePopup="closePopup"
      :formLabelAlign="formLabelAlign"
      :title="popupDialogTitle"
      @submit = "updateList"
    ></wyy-popupDialog>
  </div>
</template>

<script>
import { Table, TableColumn, Button } from "element-ui";
import { mapState } from "vuex";
import popupDialog from "../../common/popupDialog";
import { getRoleApi } from "../../request/api/role";
import { updateMenuApi } from "../../request/api/menu";

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
    };
  },
  computed: {
    ...mapState(["menu"]),
  },
  created() {},
  methods: {
    handleClick() {},
    //点击修改按钮
    edit(item) {
        console.log(item);
        this.popupDialogTitle = "修改"
      //获取角色列表
      getRoleApi().then((res) => {
        this.dialogVisible = true;
        this.formLabelAlign = {
          item: [
            {
              name:"ID",
              inputContent:item.id,
              disable:true
            },
            {
              name: "页面名称",
              inputContent: item.meta.title,
              placeholderContent: "请输入页面名称",
            },
            {
              name: "页面地址",
              inputContent: item.path,
              placeholderContent: "请输入页面地址",
            },
            {
              name: "信息元",
              inputContent: item.meta.title,
              placeholderContent: "请输入信息元",
            },
            {
              name: "排序",
              inputContent: item.sortMenu,
              placeholderContent: "请输入排序序号，数字大在上面",
            },
          ],
        };
      });
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