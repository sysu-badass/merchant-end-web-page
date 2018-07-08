import axios from '../router/http'

export function getOrders(restaurant_id){
  return axios({
    method:'get',
    url: '/api/restaurants/orders'
    // url: '/api/restaurants/'+ restaurant_id+ '/orders'
  })
}

export function handleOrder(restaurant_id, payload){
  const data = 
    {
      "orders":
      [
        {
          'order_id': payload.order_id,
          'desk_number': 0,
          'total_price': 0,
          'status': payload.status,
          'restaurant_id': Number(restaurant_id)
        }
      ],
      "order_items": []  
  };
  return axios({
    method: 'post',
    url: '/api/restaurants/' + restaurant_id + '/orders',
    data: data,
    config: { headers: {'Content-Type': 'application/json' }} 
  })
}


export function getOrderDetail(restaurant_id, order_id){
  return axios({
    method:'get',
    url:'/api/restaurants/' + restaurant_id + '/orders/' + order_id
  })
}