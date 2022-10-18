/*
 * @Author: wyy
 * @Date: 2022-10-08 17:32:04
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-08 17:33:39
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/api/role.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import inservice from '../commentApi/index'

export const getRoleApi = () => {
    return inservice({
        url: '/api/role/getRole',
        method: 'get',
    })
}