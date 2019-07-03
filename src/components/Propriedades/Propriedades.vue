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
                                <th scope="col">Id <span ref="id"  class="icon"></span></th>
                                <th scope="col">Name <span ref="name" class="icon"> </span></th>
                                <th scope="col">Total Área <span ref="total_area" class="icon"> </span></th>
                                <th scope="col">City <span ref="city" class="icon"></span></th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td>
                                    <button v-b-modal.modal-1 class="btn btn-success btn-sm"><icon style="margin-top:-5px;" name="save" scale="1"/></button> &nbsp;
                                    <button class="btn btn-info btn-sm"><icon style="margin-top:-5px;" name="pen" scale="1"/></button> &nbsp;
                                    <button class="btn btn-danger btn-sm"><icon style="margin-top:-5px;" name="trash" scale="1"/></button>
                                </td>
                                <td>{{ id }}</td>
                                <!-- <td>{{ name }}</td> -->
                                <!-- <td>{{ dt.total_area }}</td>
                                <td>{{ dt.city }}</td> -->
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
               id:'',
               name:'',
            }
        },
        mounted(){
          this.getAllProperties(this.$route.params.id);
          this.getAll();
        },
        methods:{
            ...mapActions(['Propriedades','getAllProperties']),
            ...mapGetters(['Propriedades','getProperties']),
               getAll(){
                    // const {id,name,city,total_area} =  this.$store.getters.getProperties;
                    console.log(this.$store.getters.getProperties);
                    // return data;
            }
        },
    }
</script>
