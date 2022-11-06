<!--
 * @Author: wyy
 * @Date: 2022-09-05 22:23:27
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-05 23:32:29
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/menu/Dashboard.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="studentUser">
    <div class="welcome">
      <div class="welcome-top"><span>Welcomen</span> {{ username }} !</div>
      <div style="color: #6c757d">Dashboard</div>
    </div>
    <div class="content">
      <div class="content-data flexBox">
        <div
          v-for="(item, index) in headerItem"
          :key="index"
          class="content-data-item flex1"
          :style="{backgroundImage:'url(' + item.backgroundImg +')'}"
        >
          <div class="flexBox align-items-center justify-content-around" style="height:100%">
            <div>
              <span :class="item.className" style="font-size:50px"></span>
            </div>
            <div>
              <div>{{item.name}}</div>
              <div>{{item.num}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card flexBox justify-content-between mt20">
        <div class="card-item">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>
        <div class="card-item">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="credit-card flexBox justify-content-between">
        <div
          class="credit-card-item flex1"
          v-for="(item, index) in footContent"
          :key="index"
          :style="{backgroundImage:'url(' + item +')'}"
        >
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
export default {
  components: {
    elTable: Table,
    elTableColumn: TableColumn,
  },
  data() {
    return {
      name: "请登录",
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
      headerItem:[
        {className:"iconfont icon-xueshengdangan",name:"学生总数",num:"123",backgroundImg:require("../../img/index1.jpg")},
        {className:"iconfont icon-jiaowu",name:"教务人员数量",num:"123",backgroundImg:require("../../img/index2.jpg")},
        {className:"iconfont icon-laoshi",name:"老师数量",num:"123",backgroundImg:require("../../img/index3.jpg")},
        {className:"iconfont icon-chengji",name:"学生平均成绩",num:"123",backgroundImg:require("../../img/index4.jpg")},
      ],
      footContent:[
        require("../../img/foot1.webp"),
        require("../../img/foot2.webp"),
        require("../../img/foot3.webp"),
        require("../../img/foot4.webp"),
      ]
    };
  },
  computed: {
    username() {
      let username = JSON.parse(localStorage.getItem("userInfo"));
      return username ? username.name : this.name;
    },
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
.studentUser {
  .welcome {
    color: #333;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-left: 20px;
    .welcome-top {
      font-size: 28px;
    }
  }
  .content {
    border-bottom: 1px solid #ddd;
    .content-data {
      .content-data-item {
        // border: 1px solid red;
        margin: 20px 20px;
        height: 140px;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        overflow: hidden;
        // background: red;
        background-size: 100%;
        color: white;
        text-align: end;
        font-size: 22px;
        font-weight: 600;
      }
    }
    .card {
      height: 350px;
      margin: 0 20px;
      // border: 1px solid red;
      .card-item {
        width: 48%;
        border: 1px solid whitesmoke;
      }
    }
    .credit-card {
      height: 160px;
      .credit-card-item {
        border: 1px solid whitesmoke;
        margin: 20px;
        border-radius: 20px;
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>