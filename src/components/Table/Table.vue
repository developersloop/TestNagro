<template>
    <div>
        <b-table striped hover>
             <slot name="thead" class="thead-dark text-center"></slot>
             <slot name="tbody"></slot>
        </b-table>
    </div>
</template>

<script>
     export default {
         data(){
             return {

             }
         }
     }
</script>