<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Cpf</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dt, index) in GetAll" :key="`people-${index}`">
                    <td>
                        <button class="btn btn-danger">Excluir</button>
                    </td>
                    <td>{{ dt.id }}</td>
                    <td>{{ dt.name }}</td>
                    <td>{{ dt.cpf }}</td>
                </tr>
            </tbody>
        </table>
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