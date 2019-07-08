<template>
    <div class="cont-nav" style="margin-top:-5px; margin-bottom:50px;">
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand">
                <img src="../../assets/logo_nagro.png" width="100px;">
            </a>
            <form class="form-inline" @submit.prevent="HandleSearch()">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 teste:'emit vue js'
            }
        },

        methods:{
             HandleSearch(){
                  this.$emit("changeMsg", this.teste);
             }
        }
    }
</script>

