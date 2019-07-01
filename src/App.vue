<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Grid from './components/Grid/Grid';

export default {
  name: 'app',
  components: {
    Grid
  }
}
</script>

