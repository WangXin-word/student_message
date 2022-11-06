/*
 * @Author: wyy
 * @Date: 2022-11-02 17:26:46
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-11-02 17:29:08
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/course.js
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

export const getCoursePageApi = (data) => {
    return inservice({
        url: '/api/course/page',
        method: 'get',
        params:data
    })
}

export const addCourseApi = (data) => {
    return inservice({
        url: '/api/course/add',
        method: 'post',
        data
    })
}

export const editCourseApi = (data) => {
    return inservice({
        url: '/api/course/update',
        method: 'post',
        data
    })
}

export const delCourseApi = (data) => {
    return inservice({
        url: '/api/course/deleted/'+data,
        method: 'get',
    })
}

