<template>
    <div>
        <Navbar/>
         <div class="container" style="widht:100%;">
             <div class="row">
                <div class="col-md-12">
                     <div class="btn-container">
                          <div>
                              <router-link :to="{name:'Grid'}" id="link">
                                     <button class="btn btn-dark"><span>❮</span>
                                         Voltar
                                   </button>
                              </router-link>
                          </div>
                     </div>
                    <Table>
                        <thead class="thead-dark text-center" slot="thead">
                            <!-- {{ ord }} -->
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id<span ref="id" @click="Order(order,'id','caret-down',icon)" class="icon">&nbsp;<icon v-bind:name="icon" scale="1"/></span></th>
                                <th scope="col">Name <span ref="name" @click="Order(order,'name','caret-down',icon)" class="icon"> <icon v-bind:name="iconName" scale="1"/></span></th>
                                <th scope="col">Total Área <span ref="total_area" @click="Order(order,'total_area','caret-down',icon)"><icon v-bind:name="iconArea" scale="1"/></span></th>
                                <th scope="col">City <span ref="city" @click="Order(order,'city','caret-down',icon)"><icon v-bind:name="iconCity" scale="1"/></span></th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-center" slot="tbody">
                            <tr v-for="(dt, index) in getAll" :key="`properties${index}`">
                                <td>
                                    <!-- <button v-b-modal.modal-1 class="btn btn-success btn-sm"><icon style="margin-top:-5px;" name="save" scale="1"/></button> &nbsp; -->
                                    <button class="btn btn-info btn-sm">Editar&nbsp;<icon style="margin-top:-5px;" name="pen" scale="0.7"/></button>&nbsp;
                                    <button class="btn btn-danger btn-sm">Excluir&nbsp;<icon style="margin-top:-5px;" name="trash" scale="0.7"/></button>
                                </td>
                                <td>{{ dt.id }}</td>
                                <td>{{ dt.name }}</td>
                                <td>{{ dt.total_area }}</td>
                                <td>{{ dt.city }}</td> 
                            </tr>
                        </tbody>
                    </Table>
                  
                </div>
             </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Navbar from '../Navbar/Navbar';
import { mapActions,mapGetters } from 'vuex'; 
import Table from '../Table/Table';
import _ from 'lodash';
    export default {
        components:{
            "Navbar":Navbar,
            "Table":Table
        },
        data(){
            return { 
               data:[],
                 order : 'asc',
                 icon:'caret-up',
                 iconName:'caret-up',
                 iconArea:'caret-up',
                 iconCity:'caret-up',
                 nameColumn:'',
                
            }
        },
        mounted(){
          this.getAllProperties();
        },
        methods:{
            ...mapActions(['Propriedades','getAllProperties']),
            ...mapGetters(['Propriedades','getProperties']),

              Order(order,nameColumn,icon,nameIcon){    
                  let icon_result = '';            
                if(order === 'asc'){
                         switch (nameColumn) {
                             case 'id':
                               this.icon = icon;
                             break;
                             case 'name':
                               this.iconName = icon;
                             break;
                              case 'total_area':
                               this.iconArea = icon;
                             break;
                              case 'city':
                               this.iconCity = icon;
                             break;
                         }
                       
                          this.order = 'desc'
                          this.nameColumn = nameColumn
                     }
                else if (order === 'desc'){
                     switch (nameColumn) {
                             case 'id':
                               this.icon = 'caret-up'
                             break;
                             case 'name':
                               this.iconName = 'caret-up'
                             break;
                              case 'total_area':
                               this.iconArea = 'caret-up'
                             break;
                              case 'city':
                               this.iconCity = 'caret-up'
                             break;
                         }
                       this.order = 'asc'
                       this.nameColumn = nameColumn
                }
            },
            
        },

        computed:{
            getAll(){
                   const data = [];
                   const id = this.$route.params.id;
                   if(this.nameColumn === ''){
                    _.forEach(this.$store.getters.getProperties[0],function(value){
                             if(id !== undefined){
                                  for (let index = 0; index < value.length; index++) {
                                    if(value[index].growerId ==  id){
                                        data.push(value[index])
                                    } 
                                }
                             } else {
                                   for (let index = 0; index < value.length; index++) {
                                      data.push(value[index])
                                }
                             }

                        })
                        this.data.push(data);
                        // console.log(this.data);
                        console.log(id);
                        return data;
                } else {
                     _.forEach(this.$store.getters.getProperties[0],function(value){
                          for (let index = 0; index < value.length; index++) {
                                if(value[index].growerId == id){
                                    data.push(value[index])
                                }
                            }
                     })
                     return _.orderBy(data, this.nameColumn, this.order)
                }
                 
            }
        }

    }
</script>

<style scoped>
    #link{
        text-decoration: none;
        color:aliceblue;
        box-sizing: border-box;
        padding-left: 3px;
    }

    .btn-container{
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-end;
        margin-bottom: 14px;
    }
</style>
