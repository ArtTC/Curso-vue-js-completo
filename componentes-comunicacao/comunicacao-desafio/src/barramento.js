import vue from 'vue'
import Vue from 'vue'
export default new Vue({
    methods: {
        setUser(user) {
            this.$emit('changeUser', user)
        },
        onUserChange(callback) {
            this.$on('changeUser', callback)
        }
    }
})