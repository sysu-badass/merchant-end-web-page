import axios from '../router/http'

export function getOrders(){
  return axios.get('/api/restaurants/orders')
}