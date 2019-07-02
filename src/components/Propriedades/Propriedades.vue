<template>
    <div>
        <h2>Properties</h2>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'; 
    export default {
        data(){
            return {
                
            }
        },
        mounted(){
        //    console.log(this.$route.params.id);
          this.persisteApi();
        },
        methods:{
            ...mapActions(['Propriedades','persisteApi']),
            ...mapGetters(['Propriedades','getProperties']),
        },
    }
</script>
