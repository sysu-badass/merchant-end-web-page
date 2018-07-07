import axios from "axios";
import router from "./index";

// 超时时间
axios.defaults.timeout = 5000;

axios.interceptors.request.use(config => {
  if(window.localStorage.getItem("access_token")){
    // alert("token added! from interceptor")
    config.headers.Authorization = window.localStorage.getItem("access_token");
  }
  return config;
}, error => {
  return Promise.reject(error);
});


// http response 拦截器 
axios.interceptors.response.use(
  response => {
    if(response.status==200){
      window.localStorage.setItem("access_token",response.data["access_token"]);
      window.localStorage.setItem("refresh_token",response.data["refresh_token"]);
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        store.commit(types.LOGOUT);
        router.replace({
          path: "login",
          query: {redirect: router.currentRoute.fullPath}
        });
        break;
      }
    }
    return Promise.reject(error.response.data);  // 返回接口返回的错误信息
  });
 
export default axios;