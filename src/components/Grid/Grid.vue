<template>
    <div>
        <Navbar  @changeMsg="HandleSearch" @returnData="returnSearch"/>
         <div class="container" style="widht:100%;">
             <div class="row">
                <div class="col-md-12 text-center">
                    <div class="btn-container">
                          <div>
                               <button v-b-modal.modal-1 class="btn btn-dark btn-md">Novo Registro</button>
                          </div>
                     </div>
                      <Table>
                            <thead class="thead-dark text-center" slot="thead">
                              <!-- {{ ord }} -->
                              <tr v-if="!err">
                                  <th scope="col">#</th>
                                  <th scope="col">Id <span ref="id" @click="Order(order,'id','caret-down',icon)" class="icon"><icon v-bind:name="icon" scale="1"/></span></th>
                                  <th scope="col">Name <span ref="name"  @click="Order(order,'name','caret-down',icon)" class="icon"> <icon v-bind:name="iconName" scale="1"/></span></th>
                                  <th scope="col">Cpf <span ref="cpf"  @click="Order(order,'cpf','caret-down',icon)" class="icon"> <icon  v-bind:name="iconCpf"/></span></th>
                                  <th scope="col">Propriedades</th>
                                  
                              </tr>
                              <tr v-else>
                                  <th scope="col">#</th>
                                  <th scope="col">Id</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Cpf</th>
                                  <th scope="col">Propriedades</th>
                              </tr>
                          </thead>
                           <tbody class="text-center" slot="tbody">
                            <tr v-if="err" class="text-center">
                                <td colspan="5"><span style="color:red"><b>Termo Pesquisado inválido</b></span></td>
                            </tr>
                            <tr v-for="(dt, index) in GetAll" :key="`people-${index}`" v-else>
                                <td>
                                    <button class="btn btn-info btn-sm">Editar&nbsp;<icon style="margin-top:-5px;" name="pen" scale="0.7"/></button> &nbsp;
                                    <button class="btn btn-danger btn-sm">Excluir&nbsp;<icon style="margin-top:-5px;" name="trash" scale="0.7"/></button>
                                </td>
                                <td>{{ dt.id }}</td>
                                <td>{{ dt.name }}</td>
                                 <span v-if="!cP">
                                     <td><input style="border:none; outline: none;" v-mask="'###.###.###-##'" type="text" v-model="dt.cpf" readonly></td>
                                 </span>
                                   <td v-else><input style="border:none; outline: none;" v-mask="'###.###.###-##'" type="text" v-model="dt.cpf" readonly></td>
                                <td><router-link :to="{name:'Propriedades', params: { id: dt.id}}"><span style="color:black;"><icon style="cursor:pointer" name="arrow-right"/></span></router-link></td>
                            </tr>
                        </tbody>
                      </Table>
                    <Modal title = 'cadastro'/>
                </div>
             </div>
             <div style="display:flex; flex-flow:row wrap; justify-content:flex-end;">
                 <div class="pagination">
                    <button @click="prevPage">❮</button> 
                    <button @click="nextPage">❯</button>
                 </div>
             </div>
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
                 pageSize:3,
                 currentPage:1,
                 cP:false,
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
        //  mounted(){
        //     this.getCad()
        //  },
         methods:{
            // ...mapActions(['Grower','getUsers']),
            ...mapGetters(['Grower','getCad']),
            nextPage:function() {
              // console.log(this.data);
              if((this.currentPage*this.pageSize) < this.$store.getters.getCad.length) this.currentPage++;
              this.cP = true;
            },
            prevPage:function() {
              if(this.currentPage > 1) this.currentPage--;
              this.cP = false;
            },
          Order(order,nameColumn,icon){    
                            
                if(order === 'asc'){
                         switch (nameColumn) {
                             case 'id':
                               this.icon = icon;
                               this.cP = true;
                             break;
                             case 'name':
                               this.iconName = icon;
                                 this.cP = true;
                             break;
                              case 'cpf':
                               this.iconCpf = icon;
                                 this.cP = true;
                             break;
                           
                         }
                       
                          this.order = 'desc'
                          this.nameColumn = nameColumn
                          this.cP = true;
                     }
                else if (order === 'desc'){
                     switch (nameColumn) {
                             case 'id':
                               this.icon = 'caret-up'
                                 this.cP = true;
                             break;
                             case 'name':
                               this.iconName = 'caret-up'
                                 this.cP = true;
                             break;
                              case 'cpf':
                               this.iconCpf = 'caret-up'
                                 this.cP = true;
                             break;
                            
                         }
                       this.order = 'asc'
                       this.nameColumn = nameColumn
                       this.cP = true;
                }
            
         },
         HandleSearch(cpf){
          const find =  _.find(this.data[1], ['cpf', cpf]);
          if(find != undefined){
              this.searchTop.push(find);
          } else {
              this.err = true;
          }
         },

         returnSearch(cpf){
             this.err = false;
             this.searchTop = [];
         }
    },
         computed:{
             GetAll: function(){
                 const reference = this;
                 const data = [];
                 const dataPagination = [];
                if(this.nameColumn === ''){
                    if(this.searchTop.length > 0){
                         data.push(this.searchTop[0]);
                         return data;
                    } else {
                      _.forEach(this.$store.getters.getCad,function(value){
                           data.push(value);
                         })
                           reference.data.push(data);
                            return data.sort((a,b) => {
                                let modifier = 1;
                                if(this.order === 'desc') modifier = -1;
                                if(a[this.nameColumn] < b[this.nameColumn]) return -1 * modifier;
                                if(a[this.nameColumn] > b[this.nameColumn]) return 1 * modifier;
                                return 0;
                              }).filter((row, index) => {
                                let start = (this.currentPage-1)*this.pageSize;
                                let end = this.currentPage*this.pageSize;
                                if(index >= start && index < end) return true;
                              });
                         
                    }
                } 
                 _.forEach(this.$store.getters.getCad,function(value){
                          data.push(value);
                     })
                     
                     return _.orderBy(data.sort((a,b) => {
                                let modifier = 1;
                                if(this.order === 'desc') modifier = -1;
                                if(a[this.nameColumn] < b[this.nameColumn]) return -1 * modifier;
                                if(a[this.nameColumn] > b[this.nameColumn]) return 1 * modifier;
                                return 0;
                              }).filter((row, index) => {
                                let start = (this.currentPage-1)*this.pageSize;
                                let end = this.currentPage*this.pageSize;
                                if(index >= start && index < end) return true;
                              }),this.nameColumn, this.order);
             },
         }
      
     }
</script>

<style scoped>

 table > td{
    border-top: 0px;
 }
    #mask-cpf{
       border:none;
       outline: none;
    }
    #mask-cpf:active{
      outline: none;
      border:none;
    }

  .pagination button {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
  }
.pagination button:hover:not(.active) {background-color: #ddd;}

  .pagination button.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
  }
    .btn-container{
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        margin-bottom: 14px;
    }
</style>

