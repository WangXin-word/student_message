<!--
 * @Author: 汪鑫
 * @Date: 2022-02-21 17:40:56
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-06 10:10:32
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/page/personalCenter.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="personalcenter">
        <div class="header">
            <div class="left flexBox">
                <div class="flexBox align-items-center" style="margin-left:30px;">
                    <img src="../img/img.jpg" style="border-radius:50% ;" alt="">
                </div>
                <div class="flexBox align-items-center" style="margin-left:20px">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Personalcenter',

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
.personalcenter{
    .header{
        width: 90%;
        height: 160px;
        background-color: whitesmoke;
        margin: 0 auto;
        margin-top: 80px;
        .left{
            height: 100%;
        }
    }
}
</style>