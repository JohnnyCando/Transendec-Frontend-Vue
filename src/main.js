import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'
import './assets/css/flaticon.css'

import VueCarousel from 'vue-carousel'

createApp(App).use(store).use(router).use(VueCarousel).mount('#app')
