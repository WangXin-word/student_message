/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-21 17:41:29
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/src/router/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import( /* webpackChunkName: "home" */ '../common/Home.vue'),
    meta: {
        title: '自述文件'
    },
    children: [{
            path: '/dashboard',
            component: () => import( /* webpackChunkName: "dashboard" */ '../page/Dashboard.vue'),
            meta: {
                title: '系统首页'
            }
        },
        {
            path: '/user',
            component: () => import( /* webpackChunkName: "table" */ '../page/user.vue'),
            meta: {
                title: '用户管理'
            }
        },
        {
            path: '/role',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/role.vue'),
            meta: {
                title: '角色管理'
            }
        },
        {
            path: '/model',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/model.vue'),
            meta: {
                title: '模块管理'
            }
        },
        {
            path: '/switch',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/switch.vue'),
            meta: {
                title: '开关管理'
            }
        },
        {
            path: '/order',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/order.vue'),
            meta: {
                title: '订单管理'
            }
        },
        {
            path: '/shopping',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/shopping.vue'),
            meta: {
                title: '购物车管理'
            }
        },
        {
            path: '/horseman',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/horseman.vue'),
            meta: {
                title: '骑手管理'
            }
        },
        {
            path: '/merchant',
            component: () => import( /* webpackChunkName: "tabs" */ '../page/merchant.vue'),
            meta: {
                title: '商家管理'
            }
        },
    ]
},
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../page/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../page/personalCenter.vue'),
    meta: { title: '个人中心' }
  },
  {
      path: '*',
      redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router