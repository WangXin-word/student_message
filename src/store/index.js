import Vue from 'vue'
import Vuex from 'vuex'
import {
  getMenuApi
} from '../request/api/menu';
import { asyncRouter } from "../router/index";
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      // {
      //   path: "studentUser",
      //   name: "StudentUser",
      //   meta: {
      //     "title": "学生管理"
      //   },
      //   icon: 'iconfont icon-xueshengguanli'
      // },
      // {path:"studentMessage",name:"StudentMessage",meta:{"title":"学生信息"},icon:'iconfont icon-huabanfuben'},
      // {path:"dormitory",name:"Dormitory",meta:{"title":"宿舍信息"},icon:'iconfont icon-sushe'},
      // {path:"course",name:"Course",meta:{"title":"课程管理"},icon:'iconfont icon-kecheng'},
      // {path:"grade",name:"Grade",meta:{"title":"成绩查询"},icon:'iconfont icon-chengji'},
    ],
  },
  mutations: {
    changeMenu(state, payload) {
      state.menu = payload;
    }
  },
  actions: {

    //获取菜单列表
    doGetMenuList(commit) {
      return new Promise((resolve,reject) => {
        getMenuApi().then(res => {
          console.log(res);
          let Obj = {
            path: "Dashboard",
            name: "Dashboard",
            meta: {
                  "title": "系统首页"
                },
            icon: 'iconfont icon-xueshengguanli'  
          }
          Obj.meta = JSON.stringify(Obj.meta);
          res.unshift(Obj)
          commit.commit("changeMenu",res)
          if (res && res != "[]") {
            res.map((item) => {
              item.meta = JSON.parse(item.meta);
              item.component = () => import(`../page/menu/${item.path}.vue`);
            })
            asyncRouter[1].children = res;
            console.log(router);
            router.addRoutes(asyncRouter);
          }
          resolve(res)
        })
      })
    }

  },
  modules: {}
})