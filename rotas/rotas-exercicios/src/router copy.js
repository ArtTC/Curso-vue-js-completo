import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    // mode: hash e history .
    mode: 'history',
    // scrollBehavior - Determinar o que ocorre,
    // com o scroll.
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            // Pular para o seletor, o scroll.
            return { selector: to.hash }
        }
        // return { x: 0, y:1000 }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista, props: true },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        // Redirecionar qualquer url inválida,
        // para o link em redirect .
        path: '*',
        redirect: '/'
    }]
})