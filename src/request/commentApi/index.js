/*
 * @Author: wyy
 * @Date: 2022-02-11 10:51:05
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-09-30 14:56:06
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/request/commentApi/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import axios from 'axios'; // 引入axios
import _this from '../../main'
import QS from 'qs'; // 引入qs模块,用来序列化post类型的数据;
import router from '../../router';
// 创建axios实例
const inserver = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 1000 * 12,
  baseURL: '',
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
inserver.interceptors.request.use(
  (config) => {
    if (config.url == '/api/system/login') {
      return config
    }
    // 判断token是否有效
    const token = localStorage.getItem("token");
    config.headers.Authorization = "Beane"+token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
inserver.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      if(response.data instanceof Array === true){
        return Promise.resolve(response.data);
      }
      return Promise.resolve(QS.parse(response.data))
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    if (error) {
      // 这个函数一定不要忘记了
      errorHandle(error.status)
      return Promise.reject(error.response)
    }
  }
)


/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
 const errorHandle = (status) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。 
    case 401:
      router.push({
        path:"/login"
      })
      break
      //202 登录过期
    case 202:
      router.push({
        path:"/token"
      })
      break
      // 403 没有权限
    case 403:
      router.push({
        path:"/403"
      })
      break;
      // 404请求不存在
    case 404:
      router.push({
        path:"/404"
      })
      break
      // 服务报错
    case 500:
      router.push({
        path:"/500"
      })
      
      break
    default:
  }
}


export default inserver