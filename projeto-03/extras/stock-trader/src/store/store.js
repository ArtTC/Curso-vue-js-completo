import Vue from 'vue'
import Vuex from 'vuex'

import balance from './modules/balance'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { balance, stocks, portfolio }
})