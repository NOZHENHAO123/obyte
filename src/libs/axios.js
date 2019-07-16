import axios from 'axios'
import { getToken } from '@/libs/util'
import config from '@/config'
import Cookies from 'js-cookie'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor () {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      config.headers.Authorization = getToken()
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      // console.log(config)
      // console.log('config')
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      // const { data, status } = res
      const { data } = res
      if (data && data.code !== 100) {
        // 后端服务在个别情况下回报201，待确认
        if (data.code === 401) {
          // Message.destroy()
          // Message.error(data.message)
          Cookies.remove('user')
          Cookies.remove('token')
          Cookies.remove('key')
          // setTimeout(() => {
          //   window.location.href = '/login'
          // }, 1500)
        } else {
          // if (data.message) {
          //   Message.destroy()
          //   Message.error(data.message)
          // }
        }
        return false
      } else {
        return data.data
      }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      // addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
  get (url, data) {
    let options = {
      method: 'get',
      url: url,
      params: data
    }
    return this.request(options)
  }
  post (url, data) {
    let options = {
      method: 'post',
      url: url,
      data: data
    }
    return this.request(options)
  }
}
// 当作vue的插件，挂载到vue实例上。
HttpRequest.install = function (Vue, options) {
  Vue.api = Vue.prototype.$api = new HttpRequest(options, Vue.prototype)
}
export default HttpRequest
