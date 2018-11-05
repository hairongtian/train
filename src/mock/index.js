import Mock from 'mockjs'
import { paramStringToObj } from '@/utils/common.js'

let BASE_URL = 'http://localhost:8888/api'

//登录
Mock.mock(`${BASE_URL}/login`, function(options) {
    let params = paramStringToObj(options.body)
    if(!(options.body.indexOf('username') > -1 && options.body.indexOf('password') > -1)) {
    	return
    }

    if(params.username == 'admin' && params.password == '123456') {
   		 return Mock.mock({
	    	"code":0,
			"data":{"app_session":"078fb3da8ff4544982047b447ef2a1b7","type_id":"1","user_id":"65"},
			"msg":""
	    });
   	}else {
   		return Mock.mock({
   			"msg": "用户名密码错误"
   		})
   	}



});

//获取用户信息
Mock.mock(`${BASE_URL}/getUserInfo`, {
	"code":0,
	"data":{"username":"kisslife"},
	"msg":""
});

// 
Mock.mock(`${BASE_URL}/getUserList`, {
  "code":0,
  'list|1-10': [{
    'id|+1': 1,
    'name': '@name',
    'age|1-100': 100,
    'color': '@color',
    'date': '@date'
  }],
  "msg":""
});


export default Mock

// export default Mock.mock(`${BASE_URL}/login`, {
//   'list|1-10': [{
//     'id|+1': 1,
//     'name': '@name',
//     'age|1-100': 100,
//     'color': '@color',
//     'date': '@date'
//   }]
// });

