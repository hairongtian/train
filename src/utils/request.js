import axios from 'axios'
import { BASE_URL } from '@/utils/config.js'
import { Message } from 'element-ui'
// create an axios instance
const service = axios.create({
  baseURL: BASE_URL, // api的BASE_URL
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (sessionStorage.app_session) {
    config.headers.token = sessionStorage.app_session//将接口返回的token信息配置到接口请求中,登录的时候存储app_session
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  //response => response,
  function (response) {
    if(response.data.code=='1001'||response.data.code=='1002'){//1001: 过期  具体的判断token失效的参数,请看MyCenter.vue页面,http://testapi.xueyuandayuwen.com//my/my/center?app_session=1
        sessionStorage.setItem("app_session",'')
        //sessionStorage.setItem("LoginUser",'{}')
        console.log(response.data.msg);
        var hash = window.location.hash.slice(2);
        window.location.href='/#/login?redirect=' + hash //需求方要求一旦出错立即跳转登录，所以采取这种侵入式的手段。
    }else{
        return response
    }
  },
  error => {
    console.log('error' + error)// for debug
    Message({
      message : error.message,
      type: 'error',
      duration: 2*1000
    })
    return Promise.reject(error)
  })

export default service

