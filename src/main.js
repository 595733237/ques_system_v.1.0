import Vue from 'vue'
import App from './App.vue'
 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'  
import 'bootstrap/dist/js/bootstrap.min.js' 


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
