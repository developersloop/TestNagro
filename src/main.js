import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
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