<template>
    <div>
        <table striped>
             <slot name="thead" class="thead-dark text-center"></slot>
             <slot name="tbody"></slot>
        </table>
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