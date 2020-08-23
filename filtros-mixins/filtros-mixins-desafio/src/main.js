import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('filter2', (value) => {
	/*
	value = value.split(' ')
	for (var i = 0; i < value.length; i+=2) {
		value.splice(i + 1, 0, `(${value[i].length})`)
	}
	return value.join(' ')
	*/
	return value.split(' ').map(p => `${p} (${p.length})`).join(' ')
});

new Vue({
	render: h => h(App),
}).$mount('#app')
