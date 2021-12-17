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

  html, body{
    padding: 0;
    margin: 0;
  }
</style>