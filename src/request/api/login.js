/*
 * @Author: 汪鑫
 * @Date: 2022-02-25 15:13:43
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-10 01:15:33
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/login.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import inservice from '../commentApi/index'

export const getLoginApi = (data) => {
    return inservice({
        url: '/api/system/login',
        method: 'post',
        data
    })
}