import axios from '../router/http'

export function getMenu(restaurant_id){
  return axios.get('/api/restaurants/'+ restaurant_id +'/menu')
}


export function addFood(restaurant_id,form){
  const data={
    name: form['name'],
    price: Number(form['price']),
    food_type: form['food_type'],
    description: form['description'],
    image: form['image'],
    available: form['available'],
    restaurant_id:Number(restaurant_id)
  };
  console.log(data)
  return axios({
    method: 'post',
    url: '/api/restaurants/'+ restaurant_id +'/menu',
    data: {foods:[data]},
    config: { headers: {'Content-Type': 'application/json' }}                   
  })
}

export function getFoodDetail(restaurant_id,food_id){
  return axios({
    method:'get',
    url:'/api/restaurants/'+ restaurant_id + '/menu/' + food_id,
  })
}


export function editFood(restaurant_id, food_id,form){
  const data={
    name: form['name'],
    price: Number(form['price']),
    food_type: form['food_type'],
    description: form['description'],
    image: form['image'],
    available: form['available'],
    restaurant_id:Number(restaurant_id)
  };
  console.log({foods:[data]})
  return axios({
    method: 'put',
    url: '/api/restaurants/'+ restaurant_id +'/menu/' +food_id,
    data: {foods:[data]},
    config: { headers: {'Content-Type': 'application/json' }}                   
  })
}


export function deleteFood(restaurant_id, food_id){
  return axios({
    method:'delete',
    url:'/api/restaurants/' + restaurant_id + '/menu/' + food_id,
  })
}