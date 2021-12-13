<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <foot/>
  </div>
</template>

<script>
import navbar from './components/section/navbar.vue'
import foot from './components/section/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    foot
  },
  metaInfo() {
        return { 
            title: "Meka Uprising - COLLECTIBLE NFTs",
        }
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