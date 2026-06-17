import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import App from './App.vue'
import { router } from './router'
import 'floating-vue/dist/style.css'
import './css/app.css'

document.addEventListener('DOMContentLoaded', () => {
	const app = createApp(App)
	app.use(createPinia())
	app.use(router)
	app.use(FloatingVue, { themes: { tooltip: { delay: { show: 100, hide: 0 } } } })
	app.mount('.app-rechnungswerk')
})
