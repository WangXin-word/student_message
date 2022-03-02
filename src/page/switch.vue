<!--
 * @Author: 汪鑫
 * @Date: 2022-02-15 11:00:19
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-03-02 16:37:20
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/page/switch.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="managementSwitch">
        <div class="content">
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'ManagementSwitch',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.managementSwitch{
    .content{
        background-color: red;
        height: 420px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .one{
            width: 120px;
            height: 120px;
            background-color: aqua;
        }
        .tow{
            width: 120px;
            height: 120px;
            background-color: blue;
        }
    }
}
</style>