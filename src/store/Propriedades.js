// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import *  as Service from '../functions/Properties';
const GET_ALL_RESPONSE = 'GET_ALL_RESPONSE';
const ERR_RESPONSE = 'ERR_RESPONSE';
const POST_DATA = 'POST_DATA';
const state = {
    properties:[
        {
            id: 1,
            name: "Chácara Pedacinho do Céu",
            total_area: 1090,
            city: "Araçoiaba da Serra",
            growerId: 1
        },
        {
            id: 2,
            name: "Fazenda Abrigo",
            total_area: 4131,
            city: "Arroio dos Ratos",
            growerId: 1
        },
        {
            id: 3,
            name: "Sítio Mirante da Colina",
            total_area: 3515,
            city: "Trombudo Central",
            growerId: 1
        },
        {
            id: 4,
            name: "Rancho da Boa Esperança",
            total_area: 870,
            city: "Flor do Sertão",
            growerId: 2
        },
        {
            id: 5,
            name: "Fazenda Tio Bilia",
            total_area: 24,
            city: "Cidade de Espumoso",
            growerId: 2
        },
        {
            id: 6,
            name: "Pousada do Arroz",
            total_area: 58,
            city: "Ampére",
            growerId: 3
        },
        {
            id: 7,
            name: "Rancho Vila Ribeirão",
            total_area: 1348,
            city: "Passa Tempo",
            growerId: 3
        },
        {
            id: 8,
            name: "Oca Dádiva dos Ninjas",
            total_area: 348,
            city: "Jardim de Piranhas",
            growerId: 3
        },
        {
            id: 9,
            name: "Barraco da Lourdes",
            total_area: 1812,
            city: "Solidão",
            growerId: 3
        },
        {
            id: 10,
            name: "Bunker do Carl J.",
            total_area: 2361,
            city: "Ponto Chique",
            growerId: 4
        },
        {
            id: 11,
            name: "Choupana Bento Gonçalves",
            total_area: 3521,
            city: "Alto Horizonte",
            growerId: 4
        },
        {
            id: 12,
            name: "Covil dos Loucos",
            total_area: 585,
            city: "Santo Antônio de Pose",
            growerId: 5
        },
        {
            id: 13,
            name: "Castelo Ratimbum",
            total_area: 235,
            city: "Nanuque",
            growerId: 5
        },
        {
            id: 14,
            name: "Rincão do Matão",
            total_area: 67,
            city: "Figueirópolis",
            growerId: 5
        }],
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
    // getAllProperties({commit}){
    //     Service.getProperties()
    //     .then(data => {
    //         commit(GET_ALL_RESPONSE,data.data)
    //     })
    //     .catch(err => commit(ERR_RESPONSE,err))
    // },
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