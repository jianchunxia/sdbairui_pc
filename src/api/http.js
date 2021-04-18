import request from '@/utils/request'
// 获取你要的数据
export function getIndexBan() {
	return request({
		url: '/api/industry/banner',
		method: 'GET',
	})
}
export function getDa() {
	return request({
		url: '/api/industry/banner',
		method: 'GET',
	})
}
export function getUS() {
	return request({
		url: '/api/contact/index',
		method: 'GET',
	})
}
export function getUSbanner() {
	return request({
		url: '/api/contact/banner',
		method: 'GET',
	})
}


// export function getList() {
//     return request({
//         url:"",
//         method:"GET"
//     })
// }