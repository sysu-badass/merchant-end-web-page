// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import VueLocalStorage from 'vue-localstorage'
import './mock/mock'
import store from "./store.js" 
// import VueSocketio from 'vue-socket.io';

Vue.use(ElementUI,axios, VueLocalStorage);
// Vue.use(VueSocketio, socketio('http://127.0.0.1:5000'), store);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
