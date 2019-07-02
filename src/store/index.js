import Vue from 'vue';
import Vuex from 'vuex';
import {Grower} from './Grower';
import {Propriedades} from './Propriedades'
Vue.use(Vuex);

export default  new Vuex.Store({
  modules : {
    Grower,
    Propriedades
  }
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  // strict: process.env.NODE_ENV !== 'production',
})