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
     export default {
         props:[
             'title',
         ],
         data(){
             return {
                 name:'',
                 cpf:'',
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