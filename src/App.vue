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
  },
  metaInfo() {
    return {
      title: 'Meka Uprising - COLLECTIBLE NFTs',
      meta: [
        {name: 'description', content: ''},
        {property: 'og:url', content: 'http://dev.mekauprising.com'},
        {property: 'og:type', content: 'article'},
        {property: 'og:title', content: 'Meka Uprising - COLLECTIBLE NFTs'},
        {property: 'og:description', content: ''},
        {property: 'og:image', content: '../public/images/meka-lg-logo.png'}
      ]
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