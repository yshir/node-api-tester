const _ = require('lodash')
const Axios = require('axios').default
const AxiosCookiejarSupport = require('axios-cookiejar-support').default
const qs = require('query-string')

const config = require('../config')


AxiosCookiejarSupport(Axios)
const axios = Axios.create({
  jar: true,
  withCredentials: true,
});


const request = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: options.method,
      url: `${config.api.url}/${path}`,
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      data: options.payload || null,
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response.data))
  })
}
exports.request = request

exports.get = async (path, options = {}) => {
  if (options.query) {
    path += `?${qs.stringify(options.query)}`
  }
  return await request(path, options)
}

exports.post = async (path, options = {}) => {
  return await request(path, { ...options, method: 'post' })
}

exports.put = async (path, options = {}) => {
  return await request(path, { ...options, method: 'put' })
}

exports.delete = async (path, options = {}) => {
  return await request(path, { ...options, method: 'delete' })
}
