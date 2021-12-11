import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import MoralisFactory from './moralis'
import Moralis from 'moralis'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'

/* Global CSS */
import "@/assets/global.css"

/* vue-router */
import router from './router'

/* Scroll Animation */
import AOS from 'aos'
import 'aos/dist/aos.css'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faTwitter, faYoutube, faMedium, faTelegram, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faGamepad, faPlayCircle, faUser, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* API */
import axios from "axios";


library.add(faUserSecret,faGamepad,faPlayCircle,faDiscord,faTwitter,faYoutube,faMedium,faTelegram,faUser,faGoogle,faFacebook,faGlobe,faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

// Axios Definition
const base = axios.create({
	baseURL: process.env.API_URL
});

Vue.prototype.$http = base;
Vue.config.productionTip = false

// Moralis
const serverUrl = process.env.VUE_APP_MOLARIS_SERVER_URL;
const appId = process.env.VUE_APP_MORALIS_APP_ID;
// const masterKey = process.env.VUE_APP_MORALIS_KEY;
Moralis.start({ serverUrl, appId });

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
