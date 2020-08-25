import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-960e0.firebaseio.com/'
        })
    }
})