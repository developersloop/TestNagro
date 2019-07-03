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
                                <th scope="col">ID<span ref="id"  class="icon"></span></th>
                                <th scope="col">Name <span ref="name" class="icon"> </span></th>
                                <th scope="col">Total Área <span ref="total_area" class="icon"> </span></th>
                                <th scope="col">City <span ref="city" class="icon"></span></th>
                                
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
               data:[]
            }
        },
        mounted(){
          this.getAllProperties();
        },
        methods:{
            ...mapActions(['Propriedades','getAllProperties']),
            ...mapGetters(['Propriedades','getProperties']),
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
