<template>
    <div>
        <h2>{{msg}}</h2>
        <!-- <button class="btn btn-danger">{{msg}}</button> -->
    </div>
</template>


<script>
    export default {
        props:{
            msg: String
        },
        data(){
            return {
                msg:'Clique-me'
            }
        }
    }
</script>