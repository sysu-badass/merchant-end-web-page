import axios from '../router/http'

export function getOrders(restaurant_id){
  return axios({
    method:'get',
    url: '/api/restaurants/'+ restaurant_id+ '/orders'
  })
}