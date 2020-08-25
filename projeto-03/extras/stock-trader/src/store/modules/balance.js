export default {
    namespaced: true,
    state: {
        value: 10000
    },
    getters: {
        getValue(state) {
            return state.value
        }
    },
    mutations: {
        setValue(state, value) {
            state.value = value
        }
    }
}