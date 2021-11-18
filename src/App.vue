<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <sign/>
  </div>
</template>

<script>
import navbar from './components/section/navbar.vue'
import sign from './components/section/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    sign
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  @import url('http://fonts.cdnfonts.com/css/sofia-pro');

  html, body{
    padding: 0;
    margin: 0;
  }
</style>