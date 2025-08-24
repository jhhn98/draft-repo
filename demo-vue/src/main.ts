import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { pinia } from './app/pinia'
import '../../assets/styles/style-reset.scss'
import './assets/layout.scss'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')