import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义属性（数值）
var state = {
  count: 6
}

//定义getters用来获取属性
var getters = {
  count (state) {
    return state.count
  },
  isEvenOdd (state) {
    return (state.count % 2 == 0) ? '偶数' : '奇数'
  }
}

//定义actions,要执行的操作，如流程判断，异步请求等
const actions = {
  increment ({commit, state}) {
    commit('add');
  },
  decrement ({commit, state}) {
    if(state.count > 10) {
      commit('reduce')
    }
  },
  incrementAsync ({commit, state}) {
    //异步操作
    var p = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve();
      },3000)
    })

    p.then(()=>{
      commit('add');
    }).catch(()=>{
      console.log('异步操作');
    })
  }
}

//定义mutations,处理数据的改变
const mutations = {
   add (state,params) {
    console.log('执行了mutations里面的add函数');
      console.log(params);
      state.count++
   },
   reduce (state) {
      state.count--
   }
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