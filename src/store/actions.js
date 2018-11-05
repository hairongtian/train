//定义actions,要执行的操作，涉及到的异步请求都放在这里，如流程判断等
import {INCREMENT, DECREMENT, GET_USERINFO } from './types.js'
import { getUser } from '@/api/getData.js'

const actions = {
  increment ({commit, state}) {
    commit(INCREMENT);
  },
  decrement ({commit, state}) {
    if(state.count > 10) {
      commit(DECREMENT)
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
  },
  async getUserInfo({commit,state}) {
    let res = await getUser();
    if(res.status == 200){
        commit(GET_USERINFO, res)
    }else {
      throw new Error(res)
    }
  },
  //以下这种方法会报错
  // getUserInfo({commit, state}){
  //    getUser().then(res => {
  //       commit(GET_USERINFO, res);
  //    })
  // },
}

export default actions
