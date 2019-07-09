<template>
    <div class="cont-nav" style="margin-top:-5px; margin-bottom:50px;">
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand">
                <img src="../../assets/logo_nagro.png" width="100px;">
            </a>
            <form class="form-inline" @submit.prevent="HandleSearch()">
                 <input class="form-control mr-sm-2" 
                  ref="search" 
                  type="search"
                  placeholder="Digite o CPF" aria-label="Search"
                  required 
                  v-model="search"
                  v-mask="'###.###.###-##'">
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>&nbsp;&nbsp;
                 <button class="btn btn-outline-warning my-2 my-sm-0" @click="resetForm()" type="button">Limpar</button>
           </form>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 search:''
            }
        },

        methods:{
             HandleSearch(){
                  this.$emit("changeMsg", this.search);
             },

             resetForm(){
                 this.search = '';
                  this.$emit("returnData", this.search);
             }
        }
    }
</script>

