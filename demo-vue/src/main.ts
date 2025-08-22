import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import '../../assets/styles/style-reset.scss'
import './assets/layout.scss'

createApp(App).use(createPinia()).use(router).mount('#app')