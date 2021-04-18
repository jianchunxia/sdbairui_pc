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

export function getSchoolban() {
	return request({
		url: '/api/Pcschool/banner',
		method: 'GET',
	})
}

export function getSchoolduty() {
	return request({
		url: '/api/Pcschool/duty',
		method: 'GET',
	})
}

export function getSchoolSchooles() {
	return request({
		url: '/api/Pcschool/Schooles',
		method: 'GET',
	})
}

export function getSchoolSchooltwo() {
	return request({
		url: '/api/Pcschool/Schooltwo',
		method: 'GET',
	})
}

export function getSchoolSchoolthree() {
	return request({
		url: '/api/Pcschool/Schoolthree',
		method: 'GET',
	})
}

export function getSchooldutytwo() {
	return request({
		url: '/api/Pcschool/dutytwo',
		method: 'GET',
	})
}

export function getSchoolSchools() {
	return request({
		url: '/api/Pcschool/Schools',
		method: 'GET',
	})
}

export function getindexnewsXq() {
	return request({
		url: '/api/index/newsXq',
		method: 'GET',
	})
}

export function getMajorbanner() {
	return request({
		url: '/api/Major/banner',
		method: 'GET',
	})
}