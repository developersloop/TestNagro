import Vue from 'vue';
import Vuex from 'vuex';
import {Grower} from './Grower';
Vue.use(Vuex);

export default  new Vuex.Store({
  modules : {
    Grower
  }
})