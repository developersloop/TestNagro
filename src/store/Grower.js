// eslint-disable-next-line no-unused-vars
import *  as Services from '../functions/GrowerApi';
const GET_RESPONSE = 'GET_RESPONSE'
const POST_DATA = 'POST_DATA';
const state = {
    cad:[
            {
                id: 1,
                name: "Julio Henry Peixoto",
                cpf: "32034485050"
            },
            {
                id: 2,
                name: "Aparecida Sara Jennifer Pires",
                cpf: "02162914026"
            },
            {
                id: 3,
                name: "Henrique Benjamin Bento Nascimento",
                cpf: "78530550056"
            },
            {
                id: 4,
                name: "Nelson Fernando Nogueira",
                cpf: "13430762006"
            },
            {
                id: 5,
                name: "Julia Lorena Luiza Lima",
                cpf: "80714138010"
            }
        ],
    err:[],
    initial:false
};

const mutations = {
    [GET_RESPONSE](state, ...params){
        state.cad.push(params[0].data);
    },
    [POST_DATA](state, ...params){
        state.cad.push({
            id:params[0].id,
            name:params[0].name,
            cpf:params[0].cpf
        })
    }
};

const actions = {
 

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