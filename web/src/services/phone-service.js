import http from './base-api-service'

const list = (phones) => http.get('/phones')
const detail = (id) => http.get(`/phones/${id}`)

const service = {
    list,
    detail
  }
  
  export default service;
  