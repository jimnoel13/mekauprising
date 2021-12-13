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
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Meka Uprising - COLLECTIBLE NFTs"},
                { property: 'og:url', content: 'https://mekauprising.com/'},
                { property: 'og:type', content: 'website'},    
                { property: 'og:image', content: '../public/images/meka-lg-logo.png'},    
                { name: 'robots', content: 'index,follow'} 
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