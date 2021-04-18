import request from '@/utils/request'
// 获取你要的数据
export function getIndexBan() {
	return request({
		url: '/api/index/index',
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
//首页banner
export function getUSbanner() {
	return request({
		url: '/api/contact/banner',
		method: 'GET',
	})
}

//首页核心业务
export function getIndexYwu() {
    return request({
        url:"api/index/busine",
        method:"GET"
    })
}
//首页部门
export function getIndexBM() {
    return request({
        url:"api/index/system",
        method:"GET"
    })
}
//首页培养方向
export function getIndexPY() {
    return request({
        url:"api/index/culture",
        method:"GET"
    })
}
//首页成就展示
export function getIndexCJ() {
    return request({
        url:"api/index/show",
        method:"GET"
    })
}
//首页新闻动态
export function getIndexNew() {
    return request({
        url:"api/index/news",
        method:"GET"
    })
}
//首页合作伙伴http://api.sdbairui.com/api/index/coopera
export function getIndexHz() {
    return request({
        url:"api/index/coopera",
        method:"GET"
    })
}
//首页 广告位http://api.sdbairui.com/api/index/advertis
// export function getIndexGG() {
//     return request({
//         url:"api/index/advertis",
//         method:"GET"
//     })
// }
//柏瑞设计 部分http://api.sdbairui.com/api/design/index
export function getIndexBR() {
    return request({
        url:"api/design/index",
        method:"GET"
    })
}
//柏瑞设计轮播图http://api.sdbairui.com/api/design/banner
export function getBaiRuiLUn() {
    return request({
        url:"api/design/banner",
        method:"GET"
    })
}
//柏瑞设计项目成果http://api.sdbairui.com/api/design/salaryone
export function getBaiRuiXM() {
    return request({
        url:"api/design/salaryone",
        method:"GET"
    })
}
//柏瑞设计软件业务http://api.sdbairui.com/api/design/salarytwo
export function getBaiRuiYJ() {
    return request({
        url:"api/design/salarytwo",
        method:"GET"
    })
}