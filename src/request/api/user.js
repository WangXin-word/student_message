/*
 * @Author: wyy
 * @Date: 2022-11-03 11:11:30
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-03 14:08:22
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/user.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


import inservice from '../commentApi/index'

export const getUserPageApi = (data) => {
    return inservice({
        url: '/api/system/getSysPage',
        method: 'get',
        params:data
    })
}

export const addUserApi = (data) => {
    return inservice({
        url: '/api/class/add',
        method: 'post',
        data
    })
}

export const editUserApi = (data) => {
    return inservice({
        url: '/api/class/update',
        method: 'post',
        data
    })
}

export const delUserApi = (data) => {
    return inservice({
        url: '/api/class/deleted/'+data,
        method: 'get',
    })
}

