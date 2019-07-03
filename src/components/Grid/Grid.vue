<template>
    <div>
        <Navbar/>
         <div class="container" style="widht:100%;">
             <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead class="thead-dark text-center">
                            <!-- {{ ord }} -->
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id <span ref="id"  @click="Order(order)" class="icon"><icon v-bind:name="icon" scale="1"/></span></th>
                                <th scope="col">Name <span ref="name"  @click="OrderName(order)" class="icon"> <icon v-bind:name="iconName" scale="1"/></span></th>
                                <th scope="col">Cpf <span ref="cpf"  @click="OrderCPf(order)" class="icon"> <icon  v-bind:name="iconCpf"/></span></th>
                                <th scope="col">Propriedades</th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-center">
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
                    </table>
                    <Modal title = 'cadastro'/>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'; 
import _ from 'lodash';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
     export default {
         components:{
             "Navbar":Navbar,
             "Modal":Modal
         },
         data(){
             return {
                 data:[],
                 order : 'asc',
                 icon:'caret-up',
                 iconName:'caret-up',
                 iconCpf:'caret-up',
                 nameColumn:''
             }
         },
         mounted(){
             this.persisteApi();
         },
         methods:{
            ...mapActions(['Grower','persisteApi']),
            ...mapGetters(['Grower','getCad']),
            Order(order){                
                if(order === 'asc'){
                          this.icon = 'caret-down';
                          this.order = 'desc'
                          this.nameColumn = 'id'
                     }
                else if (order === 'desc'){
                       this.icon = 'caret-up';
                       this.order = 'asc'
                        this.nameColumn = 'id'
                }
            },
              OrderName(order){                
                if(order === 'asc'){
                          this.iconName = 'caret-down';
                          this.order = 'desc'
                          this.nameColumn = 'name'
                     }
                else if (order === 'desc'){
                       this.iconName = 'caret-up';
                       this.order = 'asc'
                       this.nameColumn = 'name'
                }
            },
              OrderCPf(order){                
                if(order === 'asc'){
                          this.iconCpf = 'caret-down';
                          this.order = 'desc'
                          this.nameColumn = 'cpf'
                     }
                else if (order === 'desc'){
                       this.iconCpf = 'caret-up';
                       this.order = 'asc'
                       this.nameColumn = 'cpf'
                }
            }
            
         },
         computed:{
             GetAll: function(){
                 const reference = this;
                 const data = [];
                if(this.nameColumn === ''){
                  _.forEach(this.$store.getters.getCad[0],function(value){
                        data.push(value);
                    })
                    reference.data.push(data);
                    return this.data[1];
                } else {
                     _.forEach(this.$store.getters.getCad[0],function(value){
                          data.push(value);
                     })
                     return _.orderBy(data, this.nameColumn, this.order)
                }
             },
         }
     }
</script>

