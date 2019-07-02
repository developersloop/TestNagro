// eslint-disable-next-line no-unused-vars
import *  as Services from '../functions/GrowerApi';
const ADD_RESPONSE = 'ADD_RESPONSE'
const ADD_RESPONSE_ERR = 'ADD_RESPONSE_ERR'
const ADD_RESPONSE_PERSISTE = 'ADD_RESPONSE_PERSISTE'
const state = {
    cad:[],
    err:'',
    statusCode:''
};

const mutations = {
    [ADD_RESPONSE](state, ...params){
        state.cad.push(params[0].data);
    },
    [ADD_RESPONSE_ERR](state, ...params){
        state.cad = params;
    },
    [ADD_RESPONSE_PERSISTE](state, ...params){
        state.statusCode = params;
    }
};

const actions = {
   persisteApi({commit}){
     Services.getGrower()
     .then(data => commit(ADD_RESPONSE,data))
     .catch(err => commit(ADD_RESPONSE,err));
   },

   persisteData({commit}){
       console.log('chegou aqui');
   }
};

const getters = {
    getCad(){
        return state.cad;
    }
}

export  const Grower = {
     namespace:true, 
     state,
     mutations,
     actions,
     getters,
}