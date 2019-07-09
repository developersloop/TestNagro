<template>
    <div>
        <table class="table">
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