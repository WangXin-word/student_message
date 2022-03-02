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
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import {Menu,MenuItem,Submenu} from 'element-ui';
export default {
    components:{
        elMenu:Menu,
        elMenuItem:MenuItem,
        elSubmenu:Submenu,
    },
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'iconfont icon-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'iconfont icon-user1',
                    index: 'user',
                    title: '用户管理'
                },
                {
                    icon: 'iconfont icon-rolejiaose',
                    index: 'role',
                    title: '角色管理'
                },
                {
                    icon: 'iconfont icon-model',
                    index: 'model',
                    title: '模块管理'
                },
                {
                    icon: 'iconfont icon-switch',
                    index: 'switch',
                    title: '开关管理'
                },
                {
                    icon: 'iconfont icon-order',
                    index: 'order',
                    title: '订单管理'
                },
                {
                    icon: 'iconfont icon-shopping',
                    index: 'shopping',
                    title: '购物车管理'
                },
                {
                    icon: 'iconfont icon-qishou',
                    index: 'horseman',
                    title: '骑手管理'
                },
                {
                    icon: 'iconfont icon-merchant',
                    index: 'merchant',
                    title: '商家管理'
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
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
