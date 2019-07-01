import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
<<<<<<< HEAD
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
=======
import router from '../src/routes/index';
import store from '../src/store/index';
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'
// OR import individual icons
import 'vue-awesome/icons/pen'
import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/caret-up'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(router);

new Vue({ 
   el: '#app',
   router, 
   store,
   render: h => h(App)
})
>>>>>>> 16209a947f33aef188eef0ce31c2d2a3058d70ed
