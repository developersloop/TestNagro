// eslint-disable-next-line no-unused-vars
import *  as Services from '../functions/GrowerApi';
const GET_RESPONSE = 'GET_RESPONSE'
const POST_DATA = 'POST_DATA';
const state = {
    cad:[],
    err:[],
    initial:false
};

const mutations = {
    [GET_RESPONSE](state, ...params){
        state.cad.push(params[0].data);
    },
    [POST_DATA](state, ...params){
        state.cad.push(params);
    }
};

const actions = {
   getUsers({commit}){
     Services.getGrower()
     .then(data => commit(GET_RESPONSE,data))
     .catch(err => commit(GET_RESPONSE,err));
   },

   persisteData({commit},data){
        Services.postGrower(data)
        .then(dt => commit(POST_DATA,dt.data[0]))
        .catch(err => console.log(err));
    
   }

};

const getters = {
    getCad: state => state.cad
}

export  const Grower = {
     namespace:true, 
     state,
     mutations,
     actions,
     getters,
}