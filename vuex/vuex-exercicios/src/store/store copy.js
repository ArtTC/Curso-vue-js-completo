import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 1,
        preco: 9.99
    },
    // Ler o estado compartilhado.
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // Atribuir valor ao estado compartilhado.
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    // Atribuir valor ao estado compartilhado,
    // podendo ter alterações presentes no processo.
    actions: {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
})