/**
 * 配置编译环境和线上环境之间的切换
 * 
 * BASE_URL: 域名地址
 * BASE_URL: 路由模式
 * IMG_BASE_URL: 图片所在域名地址
 * 
 */
let BASE_URL
let IMG_BASE_URL

if (process.env.NODE_ENV == 'development') { //开发环境
  	BASE_URL='/api/'

}else if(process.env.NODE_ENV == 'production'){ //生产环境
	BASE_URL='/'
}

export {
  BASE_URL,
  IMG_BASE_URL,
}