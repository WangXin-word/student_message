<!--
 * @Author: wyy
 * @Date: 2022-09-05 20:06:20
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-13 00:58:05
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/common/Sidebar.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menu">
        <template>
          <el-menu-item :index="item.path" :key="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.meta.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
import { Menu, MenuItem, Submenu } from "element-ui";
import { mapState } from "vuex";
export default {
  components: {
    elMenu: Menu,
    elMenuItem: MenuItem,
    elSubmenu: Submenu,
  },
  data() {
    return {
      collapse: false,
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    ...mapState(["menu"]),
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
