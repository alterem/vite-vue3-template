import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { store, key } from './store'

createApp(App).use(store, key).use(router).use(ElementPlus).mount('#app')
