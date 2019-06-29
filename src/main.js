import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from '../src/routes/index';
import store from '../src/store/index';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(router);

new Vue({ 
   el: '#app',
   router, 
   store,
   render: h => h(App)
})