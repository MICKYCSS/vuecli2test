import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org'
  })
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    console.log(res.data)
    return res
  }, err => {
    console.log(err)
  })
  return instance(config)
}
// 理解回调函数，test如果成功了就回调success函数并且传递的参数为success
// function test (success, failure) {
//   success('success')
//   failure('fail')
// }
// test(res1 => { console.log(res1) }, res2 => { console.log(res2) })
