/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-13 12:05:58
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/router/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../page/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../page/personalCenter.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: "/status404",
    component: () => import( /* webpackChunkName: "about" */ '../page/404.vue'),
  },
  {
    path: "/status500",
    component: () => import( /* webpackChunkName: "about" */ '../page/500.vue'),
  },
  {
    path: '*',
    redirect: '/status404'
  }
]


  export const asyncRouter = [
    {
      path: '/',
      redirect: '/studentUser'
    },
    {
      path: '/',
      component: () => import( /* webpackChunkName: "home" */ '../common/Home.vue'),
      meta: {
        title: '自述文件'
      },
      children: []
    },
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//路由拦截器
router.beforeEach((to, from, next) => {
  //tokn拦截器
  if(!localStorage.getItem("token") && to.path != "/login"){
    return next({
      path: "/login"
    })
  }
  setTimeout(() => {
    next();
  })
})

export default router