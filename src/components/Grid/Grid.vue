<template>
    <div>
        <Navbar  @changeMsg="HandleSearch"/>
         <div class="container" style="widht:100%;">
             <div class="row">
                <div class="col-md-12 text-center">
                      <Table>
                            <thead class="thead-dark text-center" slot="thead">
                              <!-- {{ ord }} -->
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Id <span ref="id" @click="Order(order,'id','caret-down',icon)" class="icon"><icon v-bind:name="icon" scale="1"/></span></th>
                                  <th scope="col">Name <span ref="name"  @click="Order(order,'name','caret-down',icon)" class="icon"> <icon v-bind:name="iconName" scale="1"/></span></th>
                                  <th scope="col">Cpf <span ref="cpf"  @click="Order(order,'cpf','caret-down',icon)" class="icon"> <icon  v-bind:name="iconCpf"/></span></th>
                                  <th scope="col">Propriedades</th>
                                  
                              </tr>
                          </thead>
                           <tbody class="text-center" slot="tbody">
                            <tr v-for="(dt, index) in GetAll" :key="`people-${index}`">
                                <td>
                                    <button v-b-modal.modal-1 class="btn btn-success btn-sm"><icon style="margin-top:-5px;" name="save" scale="1"/></button> &nbsp;
                                    <button class="btn btn-info btn-sm"><icon style="margin-top:-5px;" name="pen" scale="1"/></button> &nbsp;
                                    <button class="btn btn-danger btn-sm"><icon style="margin-top:-5px;" name="trash" scale="1"/></button>
                                </td>
                                <td>{{ dt.id }}</td>
                                <td>{{ dt.name }}</td>
                                <td>{{ dt.cpf }}</td>
                                <td><router-link :to="{name:'Propriedades', params: { id: dt.id}}"><span style="color:black;"><icon style="cursor:pointer" name="arrow-right"/></span></router-link></td>
                            </tr>
                        </tbody>
                      </Table>
                    <Modal title = 'cadastro'/>
                </div>
             </div>
             <!-- <div style="display:flex; flex-flow:row wrap; justify-content:flex-end;">
                  <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="users"/>
             </div> -->
         </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'; 
import _ from 'lodash';
import Table from '../Table/Table';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
     export default {
         components:{
             "Navbar":Navbar,
             "Modal":Modal,
             "Table":Table
         },
         data(){
             return {
                 perPage: 2, // por pagina
                 currentPage: 1, // pagina no atual momento :)
                 data:[],
                 order : 'asc',
                 icon:'caret-up',
                 iconName:'caret-up',
                 iconCpf:'caret-up',
                 nameColumn:'',
                 searchTop:[],
                 err:false
             }
         },
         mounted(){
             this.persisteApi();
         },
         methods:{
            ...mapActions(['Grower','persisteApi']),
            ...mapGetters(['Grower','getCad']),
          Order(order,nameColumn,icon,){    
                            
                if(order === 'asc'){
                         switch (nameColumn) {
                             case 'id':
                               this.icon = icon;
                             break;
                             case 'name':
                               this.iconName = icon;
                             break;
                              case 'cpf':
                               this.iconCpf = icon;
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
                              case 'cpf':
                               this.iconCpf = 'caret-up'
                             break;
                            
                         }
                       this.order = 'asc'
                       this.nameColumn = nameColumn
                }
            
         },
         HandleSearch(cpf){
          const find =  _.find(this.data[1], ['cpf', cpf]);
          if(find != undefined){
              this.searchTop.push(find);
          } else {
              this.err = true;
              const err = {
                 id:'id não encontrado!',
                 name:'name não encontrado!',
                 cpf:'cpf não encontrado!'
              }
             this.searchTop.push(err)
          }
         }
    },
         computed:{
             GetAll: function(){
                 const reference = this;
                 const data = [];
                if(this.nameColumn === ''){
                    if(this.searchTop.length > 0){
                         data.push(this.searchTop[0]);
                         return data;
                     } else {
                        _.forEach(this.$store.getters.getCad[0],function(value){
                           data.push(value);
                         })
                           reference.data.push(data);
                           localStorage.setItem('length-paginate',data.length);
                           return this.data[1];
                     }
                } else {
                     _.forEach(this.$store.getters.getCad[0],function(value){
                          data.push(value);
                     })
                     return _.orderBy(data, this.nameColumn, this.order)
                } 
             },
               rows: function() {
                    return  localStorage.getItem('length-paginate');
            }
         }
      
     }
</script>

<style scopped>
    #cpf{
       border:none;
       outline: none;
    }
    #cpf:active{
      outline: none;
      border:none;
    }
</style>

