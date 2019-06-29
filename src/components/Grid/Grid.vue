<template>
    <div>
         <div class="container" style="widht:100%;">
             <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id <span class="icon"><icon name="caret-up" scale="1"/></span></th>
                                <th scope="col">Name <span class="icon"> <icon name="caret-up"/></span></th>
                                <th scope="col">Cpf <span class="icon"> <icon name="caret-up"/></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dt, index) in GetAll" :key="`people-${index}`">
                                <td>
                                    <button class="btn btn-warning">Editar&nbsp;<icon name="pen" scale="0.80"/></button> &nbsp;
                                    <button class="btn btn-danger">Excluir&nbsp;<span><icon name="trash" scale="0.80"/></span></button>
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
import { mapActions,mapMutations,mapState,mapGetters } from 'vuex';
import _ from 'lodash';
     export default {
         data(){
             return {
                 data:[]
             }
         },
         mounted(){
             this.persisteApi();
         },
         methods:{
            ...mapActions(['Grower','persisteApi']),
            ...mapGetters(['Grower','getCad']),
         },
         computed:{
             GetAll: function(){
                const data = [];
                _.forEach(this.$store.getters.getCad[0],function(value){
                  data.push(value);
                })
                 this.data.push(data);
                 return this.data[1];
             }
         }
     }
</script>

<style scopped>
</style>