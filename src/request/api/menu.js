/*
 * @Author: wyy
 * @Date: 2022-09-12 18:25:00
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-13 11:55:55
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/menu.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import inservice from '../commentApi/index'

//获取菜单列表
export const getMenuApi = () => {
    return inservice({
        url: '/api/menu/list',
        method: 'get',
    })
}

export const updateMenuApi = (data) => {
    return inservice({
        url: '/api/menu/update',
        method: 'post',
        data
    })
}