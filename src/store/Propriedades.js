// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import *  as Service from '../functions/Properties';
const GET_ALL_RESPONSE = 'GET_ALL_RESPONSE';
const ERR_RESPONSE = 'ERR_RESPONSE';
const state = {
    properties:[],
    err:''
}

const mutations = {
  [GET_ALL_RESPONSE](state,...params){
     state.properties = params
  },
  [ERR_RESPONSE](state,...params){
    state.err = params;
 }
}

const actions = {
    getAllProperties({commit},id){
        Service.getProperties(id)
        .then(data => commit(GET_ALL_RESPONSE,data.data))
        .catch(err => commit(ERR_RESPONSE,err))
    }
};

const getters = {
    getProperties(){
        console.log(state.properties);
        return state.properties[0];
    }
}


export const Propriedades = {
    namespace:true,
    state,
    mutations,
    actions,
    getters
    
}