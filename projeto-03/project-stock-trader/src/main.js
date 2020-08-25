import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'

import router from  './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('money', (value) => {
	value = `${value}`
	if (value.indexOf('.') !== -1) {
		value = `${value}`.split('.')
		value[1] = value[1].substring(0,2).padStart(2)
		value = value.join('.')
	}
	return `R$ ${value}`
})

new Vue({
	vuetify,
	router, 
	store,
	render: h => h(App),
}).$mount('#app')
