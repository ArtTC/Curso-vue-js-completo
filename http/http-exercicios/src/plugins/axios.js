import Vue from 'vue'
import axios from 'axios'

// Opcional
// axios.defaults.baseURL = 'https://curso-vue-e2d08.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-e2d08.firebaseio.com/',
            headers: {
                'Authorization': 'abc123'
                // get: {
                // }
            }
        }) 

        // Interceptor de requisição.
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if (config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        // Interceptor de resposta.
        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for (let chave in res.data) {
            //     // ...res.data[chave] - email: res.data[chave].email, 
            //     // nome: res.data[chave].nome .
            //     array.push({ id: chave, ...res.data[chave] })
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})