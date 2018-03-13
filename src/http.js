import { transform } from './tool'
const BASEURL = 'http://localhost:3000'
const METHODS = ['GET', 'POST']
const TIME_OUT = 120000
const _request = async (url, method, params) => {
  const _url = BASEURL + url
  const _p1 = new Promise((resolve, reject) => {
    let func;
    if (method === METHODS[0]) {
      func = fetch(_url)
    } else if (method === METHODS[1]) {
      func = fetch(_url, params)
    }
    func.then(res => {
      return res.json()
    }).then(res => {
      if (res.retcode === '2000000' || res.retcode === 2000000) {
        let data = res.data || res.data.data || res.msg
        resolve(data) 
      } else {
        reject(new Error(res.msg || '服务器异常'))
      }
    }).catch(err => {
      reject(err)
    })
  })
  const _p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Error('网络请求超时'))
    }, TIME_OUT)
  })
  return Promise.race([_p1, _p2])
} 

const http = {
  post: (url, params = {}) => {
    return _request(url, METHODS[1])
  }, 
  get: (url, params = {}) => {
    return _request(transform(url, params), METHODS[0])
  }
} 

export default {
  post: http.post,
  get: http.get
}
