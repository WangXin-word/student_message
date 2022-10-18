import Vue from 'vue'
import Vuex from 'vuex'
import {geMenuApi} from '../request/api/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:[
      {path:"studentUser",name:"StudentUser",meta:{"title":"学生管理"},icon:'iconfont icon-xueshengguanli'},
      // {path:"studentMessage",name:"StudentMessage",meta:{"title":"学生信息"},icon:'iconfont icon-huabanfuben'},
      // {path:"dormitory",name:"Dormitory",meta:{"title":"宿舍信息"},icon:'iconfont icon-sushe'},
      // {path:"course",name:"Course",meta:{"title":"课程管理"},icon:'iconfont icon-kecheng'},
      // {path:"grade",name:"Grade",meta:{"title":"成绩查询"},icon:'iconfont icon-chengji'},
    ],
  },
  mutations: {
    changeMenu(state,payload){
      state.menu = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
