import request from '@/utils/request'
import axios from 'axios'
//import data from '@/mock/index.js';
import qs from 'qs'


//参数序列化 可以替换qs
function stringifyObj(params) {
  let paramsString = ''
  if(!params.constructor===Object || Object.keys(params).length === 0){
      return
  }else {
    Object.keys(params).forEach(function(key){
      paramsString += `${key}=${params[key]}&`
    })

    let len = paramsString.length-1
    paramsString = paramsString.substring(0, len)
  }
  return paramsString
}

//test
export const test = data => {
  return request({
    url: 'sbms/taskInfo',
    method: 'post',
    data: data 
  })  
}


