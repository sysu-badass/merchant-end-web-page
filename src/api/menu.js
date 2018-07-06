import axios from '../router/http'

export function getMenu(phonenumber){
  return axios.get('/api/restaurants/menu')
}

export function addFood(form){
  return axios({
    method: 'post',
    url: '/api/restaurants/addfood',
    data: form,
    config: { headers: {'Content-Type': 'multipart/form-data' }}                   
  })
}

export function editFood(form){
  return axios({
    method: 'post',
    url: '/api/restaurants/editfood',
    data: form,
    config: { headers: {'Content-Type': 'multipart/form-data' }}                   
  })
}