<template>
    <div>
         <b-modal id="modal-1" title="Cadastro" hide-footer>
             
            <b-form @submit.prevent="HandlePost()">
               <b-form-group>
                    <b-form-input
                    id="input-1"
                    v-model="name"
                    type="text"
                    required
                    placeholder="Enter Name"
                    ></b-form-input>
               </b-form-group>
                <b-form-group>
                      <b-form-input
                        id="input-1"
                        v-model="cpf"
                        type="text"
                        required
                        placeholder="Enter cpf"
                       ></b-form-input>
                </b-form-group>
                <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted">
                    Cadastrar nova Propriedade?
                </b-form-checkbox>
                <div v-if="status == 'accepted'" style="margin-top:20px;">
                     <b-card class="mt-3" header="Cadastar Propriedade" style="margin-bottom:20px;">
                        <b-form-group>
                            <b-form-input
                                id="input-1"
                                v-model="name"
                                type="text"
                                required
                                placeholder="Digite seu Nome"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                             <b-form-input
                                id="input-1"
                                v-model="total_area"
                                type="text"
                                required
                                placeholder="Digite o Total da Área"
                            ></b-form-input>
                        </b-form-group>
                          <b-form-group>
                             <b-form-input
                                id="input-1"
                                v-model="city"
                                type="text"
                                required
                                placeholder="Digite a Cidade"
                            ></b-form-input>
                        </b-form-group>
                    </b-card>
                </div>
              
                <div style="display:flex; flex-flow:row wrap; justify-content:flex-end;">
                 <b-form-group>
                      <b-button type="submit" variant="primary">Enviar</b-button>&nbsp;
                      <b-button type="reset" variant="danger">Resetar</b-button>
                </b-form-group>
                </div>
            </b-form>
         </b-modal>
    </div>
</template>

<script>
     import {mapActions} from 'vuex';
     import axios from 'axios';
     import _ from 'lodash';
import { parse } from 'path';

     export default {
         props:[
             'title',
         ],
         data(){
             return {
                 name:'',
                 total_area:'',
                 cpf:'',
                 city:'',
                 data:[],
                 selected:null,
                 status:'not_accepted'
             }
         },
         mounted(){

         },
         computed:{
             getPrp(){
                    const reference = this;
             const dataArray = [];
             const options = [];
             var a = [];
                return  axios.get(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`,{
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    },
                    proxy: {
                    host: 'http://localhost:8080/',
                    port: 8080
                    }
                }).then(function(data){
                    dataArray.push(data.data);
                         _.forEach(dataArray[0],function(value){
                             a.push(value)
                        })
                            
                })
                  .catch(err => console.log(err))
             }
         },
         methods:{
               ...mapActions(['Grower','persisteData']),
             HandlePost(){
                 this.persisteData();
             }
         }
     }
</script>