/*
 * @Author: wyy
 * @Date: 2022-11-02 15:41:36
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-02 15:42:38
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/dormitory.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
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

export const getDormitoryPageApi = (data) => {
    return inservice({
        url: '/api/dormitory/page',
        method: 'get',
        params:data
    })
}

export const addDormitoryApi = (data) => {
    return inservice({
        url: '/api/dormitory/add',
        method: 'post',
        data
    })
}

export const editDormitoryApi = (data) => {
    return inservice({
        url: '/api/dormitory/update',
        method: 'post',
        data
    })
}

export const delDormitoryApi = (data) => {
    return inservice({
        url: '/api/dormitory/deleted/'+data,
        method: 'get',
    })
}

