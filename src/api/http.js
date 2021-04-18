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
export function getabschool() {
	return request({
		url: '/api/about/tog-school',
		method: 'GET',
	})
}
export function getindupei() {
	return request({
		url: '/api/industry/foster',
		method: 'GET',
	})
}
export function getinduhuan() {
	return request({
		url: '/api/industry/context',
		method: 'GET',
	})
}
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