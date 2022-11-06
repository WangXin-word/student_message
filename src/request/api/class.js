/*
 * @Author: wyy
 * @Date: 2022-11-02 10:46:35
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-02 15:14:12
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/class.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import inservice from '../commentApi/index'

export const getClassPageApi = (data) => {
    return inservice({
        url: '/api/class/page',
        method: 'get',
        params:data
    })
}

export const addClassApi = (data) => {
    return inservice({
        url: '/api/class/add',
        method: 'post',
        data
    })
}

export const editClassApi = (data) => {
    return inservice({
        url: '/api/class/update',
        method: 'post',
        data
    })
}

export const delClassApi = (data) => {
    return inservice({
        url: '/api/class/deleted/'+data,
        method: 'get',
    })
}

