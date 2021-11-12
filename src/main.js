import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'
import router from './router'
import "@/assets/global.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faTwitter, faYoutube, faMedium, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faGamepad, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret,faGamepad,faPlayCircle,faDiscord,faTwitter,faYoutube,faMedium,faTelegram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
