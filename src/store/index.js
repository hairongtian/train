import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

//定义属性（数值）
const state = {
  userInfo: null, //用户信息
  login: false, //是否登录
  count: 6
}

//创建store对象
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

//导出store对象

export default store