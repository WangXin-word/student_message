<!--
 * @Author: 汪鑫
 * @Date: 2022-02-13 23:07:50
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-15 18:11:33
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/common/Home.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>

<script>
import {Backtop} from 'element-ui'
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    components:{
        vHead,
        vSidebar,
        vTags,
        elBacktop:Backtop,
    },
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
