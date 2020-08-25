export default {
    namespaced: true,
    state: {
        value: 10000
    },
    getters: {
        getBalance(state) {
            return state.value
        }
    },
    mutations: {
        setBalance(state, value) {
            state.value = value
        }
    },
    actions: {
        handleBalance(state, value) {
            if (isNaN(value)) {
                console.log(`isNan ${value}`)
                return
            }
            console.log(state.state.value, value)
            state.commit('setBalance', state.state.value += value)
        }
    }
}