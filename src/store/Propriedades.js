// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import *  as Service from '../functions/Properties';
const GET_ALL_RESPONSE = 'GET_ALL_RESPONSE';
const ERR_RESPONSE = 'ERR_RESPONSE';
const POST_DATA = 'POST_DATA';
const state = {
    properties:[],
    err:''
}

const mutations = {
  [GET_ALL_RESPONSE](state,...params){
     state.properties.push(params);
  },
  [ERR_RESPONSE](state,...params){
    state.err = params;
  },
  [POST_DATA](state,...params){
      state.properties.push(params);
  }
}

const actions = {
    getAllProperties({commit}){
        Service.getProperties()
        .then(data => {
            commit(GET_ALL_RESPONSE,data.data)
        })
        .catch(err => commit(ERR_RESPONSE,err))
    },
    postProperties({commit},data){
        Service.postProperties(6,data[0])
        .then(data => {
           commit(POST_DATA,data[0])
        })
       .catch(err => console.log(err))
    }
      
}

const getters = {
    getProperties(){
        return state.properties;
    }
}


export const Propriedades = {
    namespace:true,
    state,
    mutations,
    actions,
    getters
    
}