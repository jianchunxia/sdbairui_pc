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

//首页核心业务
export function getIndexYwu() {
	return request({
		url: "api/index/busine",
		method: "GET"
	})
}
//首页部门
export function getIndexBM() {
	return request({
		url: "api/index/system",
		method: "GET"
	})
}
//首页培养方向
export function getIndexPY() {
	return request({
		url: "api/index/culture",
		method: "GET"
	})
}
//首页成就展示
export function getIndexCJ() {
	return request({
		url: "api/index/show",
		method: "GET"
	})
}
//首页新闻动态
export function getIndexNew() {
	return request({
		url: "api/index/news",
		method: "GET"
	})
}
//首页合作伙伴http://api.sdbairui.com/api/index/coopera
export function getIndexHz() {
	return request({
		url: "api/index/coopera",
		method: "GET"
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
		url: "api/design/index",
		method: "GET"
	})
}
//柏瑞设计轮播图http://api.sdbairui.com/api/design/banner
export function getBaiRuiLUn() {
	return request({
		url: "api/design/banner",
		method: "GET"
	})
}
//柏瑞设计项目成果http://api.sdbairui.com/api/design/salaryone
export function getBaiRuiXM() {
	return request({
		url: "api/design/salaryone",
		method: "GET"
	})
}
//柏瑞设计软件业务http://api.sdbairui.com/api/design/salarytwo
export function getBaiRuiYJ() {
	return request({
		url: "api/design/salarytwo",
		method: "GET"
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
		url: '/api/Pcschool/Schooles?school_id=12',
		method: 'GET',
	})
}

export function getSchoolSchooltwo() {
	return request({
		url: '/api/Pcschool/Schooltwo?school_id=13',
		method: 'GET',
	})
}

export function getSchoolSchoolthree() {
	return request({
		url: '/api/Pcschool/Schoolthree?school_id=14',
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