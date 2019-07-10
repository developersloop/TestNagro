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

                  <select v-model="selected">
                    <option
                        v-for="pro in getPrp"
                        :key="pro.id" 
                        :value="pro.name">
                        <!-- {{ account.conta }} - {{ account.descricao_conta }} -->
                    </option>
                </select>
              
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
                 cpf:'',
                 data:[],
                 selected:null
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
                return axios.get(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`,{
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
                        
                       return a;
                            
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