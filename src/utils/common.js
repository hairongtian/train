import Vue from 'vue'
import { Toast } from 'mint-ui'

Vue.prototype.toast = (msg)=> {
  Toast({
     message: msg,
     duration: 1800
  })
}

export const cookieJar = {
  //存
  set(cname, cvalue, exdays) {
    if (!cname) return;
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    document.cookie = cname + '=' + encodeURIComponent(cvalue) + '; expires=' + d;
  },
  //取
  get(name) {
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      if (c.indexOf(name) > -1) {
        return decodeURIComponent(c.substring(c.indexOf('=') + 1, c.length));
      }
    }
  },
  //删
  remove(name) {
    let c = this.get(name);
    if (c) {
      document.cookie = name + '=;expires=' + new Date(0);
    }
  }
}


//{day: "6月15日", week: "周五"}
Vue.prototype.getDate = function(d) {
    let date = null
    if (!d) {
      date = new Date()
    } else {
      date = new Date(d)
    }
    let weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let weekday = date.getDay()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return {
      day: `${month}月${day}日`,
      week: weekArr[weekday]
    }
}


  //参数序列化 可以替换qs
  export const stringifyObj = (params) => {
    let paramsString = ''
    if (!params.constructor === Object || Object.keys(params).length === 0) {
      return
    } else {
      Object.keys(params).forEach(function(key) {
        paramsString += `${key}=${params[key]}&`
      })

      let len = paramsString.length - 1
      paramsString = paramsString.substring(0, len)
    }
    return paramsString
  }

// 手机号验证
export const isvalidPhone = (str) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

//日期
//parseTime(new Date(),'{y}-{m}-{d}')
export const parseTime = (time, cFormat) => {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 获取当前日期的前或后几天的日期
//getOtherDay('2018-6-12','6')
export const getOtherDay = (currentDate, day) => {
   let date =  currentDate ? currentDate : new Date();
   let futureDate = new Date(date);
   futureDate.setDate(futureDate.getDate() + day);
   return parseTime(futureDate,'{y}-{m}-{d}')
}

//字段长度验证
export const validStringLength = (str) => {
  if (!str) {
    return 0
  }
  return str.length
}

//回去验证码button
export const setCodeBtnStatus = (codeBtn, seconds) => {
  if (!Number(seconds)) {
    return false
  }
  let timer = null;
  codeBtn.classList.add('is-disabled');
  timer = setInterval(function() {
    codeBtn.innerText = `${seconds}s后重新获取验证码`;
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      codeBtn.innerText = `获取验证码`;
      codeBtn.classList.remove('is-disabled');
    }
  }, 1000)
}
// let codeBtn = this.$refs.codeBtn
// setCodeBtnStatus(codeBtn,10)

//提交数据显示正在加载
export const preloader = (type) => {
  const preloader = document.createElement('div');
  const icon = document.createElement('i');
  preloader.className = 'preloader-indicator-modal loadTip';
  icon.className = 'preloader';
  preloader.append(icon);
  const body = document.body;
  if (type == 'show') {
    body.append(preloader);
  } else if (type = "hide") {
    let p = document.querySelector('.preloader-indicator-modal');
    if (p) {
      body.removeChild(p);
    }
  }
}

//toast
export const toast = (msg) => {
  const toastDiv = document.createElement('div');
  const bodyEle = document.body;
  const toastSpan = document.createElement('span');
  toastDiv.className = 'toast';
  toastSpan.append(msg);
  toastDiv.append(toastSpan);
  bodyEle.append(toastDiv);
  setTimeout(() => {
    bodyEle.removeChild(toastDiv)
  }, 3000)
}

//md5加密
// Vue.prototype.md5 = function(val) {
//  var md5 = crypto.createHash("md5");
//  md5.update(val);
//  return md5.digest('hex');
// }

//获取参数 param2Obj('?name=jin&age=30')
export const param2Obj = (url) => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}


//url: username=addfsdf&password=22233111
export const paramStringToObj = (paramStr) => {
  if (!paramStr) {
    return
  }
  let arr = paramStr.split('&');
  let param = {}
  arr.forEach((item, index) => {
    let key = item.split('=')[0]
    param[key] = item.split('=')[1]
  })
  return param;
}
