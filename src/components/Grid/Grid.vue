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
                                
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="(dt, index) in GetAll" :key="`people-${index}`">
                                <td>
                                    <button class="btn btn-success btn-sm"><icon style="margin-top:-5px;" name="save" scale="1"/></button> &nbsp;
                                    <button class="btn btn-info btn-sm"><icon style="margin-top:-5px;" name="pen" scale="1"/></button> &nbsp;
                                    <button class="btn btn-danger btn-sm"><icon style="margin-top:-5px;" name="trash" scale="1"/></button>
                                </td>
                                <td>{{ dt.id }}</td>
                                <td>{{ dt.name }}</td>
                                <td>{{ dt.cpf }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'; 
import _ from 'lodash';
import Navbar from '../Navbar/Navbar';
     export default {
         components:{
             "Navbar":Navbar
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
                if(this.nameColumn === ''){
                    const data = [];
                  _.forEach(this.$store.getters.getCad[0],function(value){
                        data.push(value);
                    })
                    this.data.push(data);
                    return this.data[1];
                } else {
                    const data = [];
                     _.forEach(this.$store.getters.getCad[0],function(value){
                          data.push(value);
                     })
                     return _.orderBy(data, this.nameColumn, this.order)
                }
             },
         }
     }
</script>

