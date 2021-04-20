import axios from 'axios'

// const token ='你自己的token'
// create an axios instance
const service = axios.create({
  baseURL: 'https://api.sdbairui.com/',
  timeout: 15000 // request timeout
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    // console.log("出错啦",error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service