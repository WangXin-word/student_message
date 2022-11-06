<!--
 * @Author: 汪鑫
 * @Date: 2022-02-13 23:08:20
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-06 11:12:55
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/Login.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">学生管理平台</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="name">
          <el-input v-model="param.name" placeholder="username">
            <el-button slot="prepend" icon="iconfont icon-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="iconfont icon-password"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <!-- <div @click="MenuList">点我</div> -->
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Button, Input } from "element-ui";
import { getLoginApi } from "../request/api/login.js";
export default {
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elButton: Button,
    elInput: Input,
  },
  data: function () {
    return {
      param: {
        name: "汪鑫",
        password: "123456",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          getLoginApi(this.param).then((res) => {
            if (res.code == 200) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("userInfo", JSON.stringify(res.data));
              this.$message.success("登录成功");
              this.menuList();
            } else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
        } else {
          this.$message.error("请输入账号和密码");
          console.log("error submit!!");
          return false;
        }
      });
    },

    //获取菜单
    menuList() {
      this.$store.dispatch('doGetMenuList').then(res => {
        console.log(res);
        if (res && res != "[]") {
          this.$router.push("/");
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../img/login-bg.jpg");
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>