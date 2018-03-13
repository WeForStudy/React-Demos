import http from '../http'
import apis from '../api'
export const getQuestion = (params = {}) => {
  return http.get(apis.getQuestion, params)
}