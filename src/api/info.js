import axios from '../router/http'

export function getInfo(restaurant_id) {
  return axios({
    url:'/api/restaurants/'+ restaurant_id +'/settings',
    method: "get",
  })
};

export function updateInfo(restaurant_id,form){  
  return axios({
    method: 'put',
    url: '/api/restaurants/'+ restaurant_id +'/settings',
    data: form,
    config: { headers: {'Content-Type': 'applicaton/json' }}                   
  })
}

export function getQiniuToken(){
  return axios.get('/api/qiniutoken')
};