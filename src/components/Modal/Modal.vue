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
                    placeholder="Digite o Nome"
                    ></b-form-input>
               </b-form-group>
                <b-form-group>
                      <b-form-input
                        id="input-1"
                        v-model="cpf"
                        type="text"
                        required
                        placeholder="Digite o Cpf"
                        v-mask="'###.###.###-##'"
                       ></b-form-input>
                </b-form-group>
                 <!-- <b-form-group>
                     <select v-model="select" required class="form-control" name="propriedade" id="propriedades">
                        <option value="" disabled selected>Escolha uma Propriedade</option>
                         <option v-for="data in options" :key="`${data.id}-${data.name}`" :value="data.id">{{ data.name }}</option>
                    </select>
                </b-form-group> -->
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
                                v-model="name_propriedade"
                                type="text"
                                required
                                placeholder="Digite o Nome da Propriedade"
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
                      <b-button type="reset" variant="danger" @click="reset">Resetar</b-button>
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
                 name_propriedade:'',
                 total_area:'',
                 cpf:'',
                 city:'',
                 options:[],
                 select:'',
                 status:'not_accepted'
             }
         },
         mounted(){this.getPrp();},
         computed:{},
         methods:{
               ...mapActions(['postProperties','persisteData']),
             HandlePost(){
                 const name = this.name;
                 const cpf = this.cpf;
                 const name_propriedade = this.name_propriedade;
                 const total_area = this.total_area;
                 const city = this.city;
                 const select = this.select;
                 const growerId = '';
                 const data = {
                    grower:[
                          {   
                              id:6,
                              name,
                              cpf,
                          }
                    ],
                    properties:[
                         {
                             id:15,
                             name_propriedade,
                             total_area,
                             city, 
                             growerId,
                         }
                    ],
                 }
                 this.persisteData(data.grower);
                 this.postProperties(data.properties);
                 this.reset();
                 this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
             },
             reset(){
                 this.status = 'accept'
                 this.cpf = ''
                 this.city = ''
                 this.name_propriedade = '';
                 this.total_area = '';
                 this.name = '';

                 },   
              getPrp(){
                    const ref = this;
                    const reference = this;
                    const dataArray = [];
                    const options = [];
                    var a = [];
                    axios.get(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`,{headers: {'Access-Control-Allow-Origin': '*',},proxy: {host: 'http://localhost:8080/',port: 8080}
                }).then(function(data){
                    // const ref = this;
                    dataArray.push(data.data);
                         _.forEach(dataArray[0],function(value){
                            ref.options.push(value);
                        })  
                })
                  .catch(err => console.log(err))
                
             }
         }
     }
</script>