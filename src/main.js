import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/site.scss'
import 'bootstrap/scss/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

library.add(faScaleBalanced)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
