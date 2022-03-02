import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块,用来序列化post类型的数据;

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
    console.log(config);
    
    if (config.url == '/admin/auth/login') {
      return config
    }
    // 判断token是否有效
    const token = Cookie.get('token')
    config.headers.Authorization = token
    config.headers.token = token
    nprogress.start()
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
    console.log(response);
    if (response.status === 200) {
      return Promise.resolve(response)
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
      console.log(error);
      // 这个函数一定不要忘记了
      errorHandle(error.response.status)
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
  // console.log(other)
  switch (status) {
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。 
    case 401:
      
      break
      // 403 token过期 清除token并跳转登录页
    case 1004:
      
      break
      // console.log('TOken异常，重新登录')
    case 404:
      alert("错误")
      break
      // 404请求不存在
    case 404:
      break
    default:
      // console.log('未找到该方法')
      // Message.error(error.response.data.message)
      // Message.error('未找到该方法！请稍后重试！')
  }
}


export default inserver