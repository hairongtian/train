//定义mutations,处理数据的改变
import {INCREMENT, DECREMENT, RECORD_USERINFO, GET_USERINFO } from './types.js'

const mutations = {
   [INCREMENT] (state,params) {
      state.count++
   },
   [DECREMENT] (state) {
      state.count--
   },
   // 记录用户信息
   [RECORD_USERINFO] (state, info) {
   		state.login = true;
   		sessionStorage.user_id = info.user_id;
   		sessionStorage.app_session = info.app_session;
   },
   [GET_USERINFO] (state, res) {
   	state.userInfo = res.data.data
   }
}

export default mutations