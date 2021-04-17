import request from '@/utils/request'
// 获取你要的数据
export function getData() {
	return request({
		url: '/api/Pcschool/banner',
		method: 'GET',
	})
}


export function getList() {
    return request({
        url:"",
        method:"GET"
    })
}