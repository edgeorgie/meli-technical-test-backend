const QueryString = require('query-string')
const axios = require('axios').default

const MELI_API = 'https://api.mercadolibre.com'

const AxiosInstance = axios.create({
  baseURL: MELI_API,
  headers: {
    'Content-Type': 'application/json'
  },

  paramsSerializer: (params) =>
    QueryString.stringify({
      ...params
    })
})

AxiosInstance.interceptors.request.use(
  async (configuration) => await configuration
)

AxiosInstance.interceptors.response.use(
  (res) => {
    if (res && res.data) return res.data

    return res
  },
  (err) => {
    throw err
  }
)

module.exports = { MELI_API, AxiosInstance }