/*
 * @Author: 汪鑫
 * @Date: 2022-02-11 11:13:51
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-11 11:13:51
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/request/api/model.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import axios from '../commentApi/index';
// 获取列表
export function  getLoginApi (data) {
    return axios.post('/login',  data)//返回的时promies对象，所以直接return出去就好了
}