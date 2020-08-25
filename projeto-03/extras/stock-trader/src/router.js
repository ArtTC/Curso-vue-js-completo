import Vue from 'vue'
import Router from 'vue-router'

import Menu from './components/template/Menu'
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{   
        path: '/', 
        components: { 
            default: Home,
            menu: Menu 
        }
    }, {   
        path: '/portfolio', 
        components: { 
            default: Portfolio,
            menu: Menu 
        }
    }, {   
        path: '/stocks', 
        components: { 
            default: Stocks,
            menu: Menu 
        }
    }, {
        path: '*',
        redirect: '/'
    }]
})