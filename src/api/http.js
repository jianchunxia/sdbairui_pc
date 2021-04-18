import request from '@/utils/request'
// 获取你要的数据
// 联系我们内容
export function getUS() {
	return request({
		url: '/api/contact/index',
		method: 'GET',
	})
}
// 联系我们banner
export function getUSbanner() {
	return request({
		url: '/api/contact/banner',
		method: 'GET',
	})
}
// 关于我们合作校园
export function getabschool() {
	return request({
		url: '/api/about/tog-school',
		method: 'GET',
	})
}
// 关于我们柏瑞简介
export function getabjian() {
	return request({
		url: '/api/about/index',
		method: 'GET',
	})
}
// 关于我们校园文化
export function getabwen() {
	return request({
		url: '/api/about/culture',
		method: 'GET',
	})
}
// 关于我们校园文化
export function getabban() {
	return request({
		url: '/api/about/environment',
		method: 'GET',
	})
}
// 产业事业部banner
export function getDa() {
	return request({
		url: '/api/industry/banner',
		method: 'GET',
	})
}
// 产业事业部公司环境
export function getindugs() {
	return request({
		url: '/api/industry/index',
		method: 'GET',
	})
}
// 产业事业部培养图
export function getindupei() {
	return request({
		url: '/api/industry/foster',
		method: 'GET',
	})
}
// 产业事业部环境图
export function getinduhuan() {
	return request({
		url: '/api/industry/context',
		method: 'GET',
	})
}
// 产业事业部生态圈图
export function getindushen() {
	return request({
		url: '/api/industry/ecology',
		method: 'GET',
	})
}


// export function getList() {
//     return request({
//         url:"",
//         method:"GET"
//     })
// }