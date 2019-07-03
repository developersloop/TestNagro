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
                                <th scope="col">Id<span ref="id" @click="Order(order,'id','caret-down',icon)" class="icon">&nbsp;<icon v-bind:name="icon" scale="1"/></span></th>
                                <th scope="col">Name <span ref="name" @click="Order(order,'name','caret-down',icon)" class="icon"> <icon v-bind:name="iconName" scale="1"/></span></th>
                                <th scope="col">Total Área <span ref="total_area" @click="Order(order,'area','caret-down',icon)"><icon v-bind:name="iconArea" scale="1"/></span></th>
                                <th scope="col">City <span ref="city" @click="Order(order,'city','caret-down',icon)"><icon v-bind:name="iconCity" scale="1"/></span></th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="(dt, index) in getAll" :key="`properties${index}`">
                                <td>
                                    <button v-b-modal.modal-1 class="btn btn-success btn-sm"><icon style="margin-top:-5px;" name="save" scale="1"/></button> &nbsp;
                                    <button class="btn btn-info btn-sm"><icon style="margin-top:-5px;" name="pen" scale="1"/></button> &nbsp;
                                    <button class="btn btn-danger btn-sm"><icon style="margin-top:-5px;" name="trash" scale="1"/></button>
                                </td>
                                <td >{{ dt.id }}</td>
                                <td>{{ dt.name }}</td>
                                <td>{{ dt.total_area }}</td>
                                <td>{{ dt.city }}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Navbar from '../Navbar/Navbar';
import { mapActions,mapGetters } from 'vuex'; 
import _ from 'lodash';
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
                 iconArea:'caret-up',
                 iconCity:'caret-up',
                 nameColumn:''
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
                              case 'area':
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
                              case 'area':
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
                  _.forEach(this.$store.getters.getProperties[0],function(value){
                        for (let index = 0; index < value.length; index++) {
                            if(value[index].growerId == id){
                                data.push(value[index])
                            }
                        }
                    })
                    this.data.push(data);
                    // console.log(this.data);
                    return data;
            }
        }

    }
</script>
