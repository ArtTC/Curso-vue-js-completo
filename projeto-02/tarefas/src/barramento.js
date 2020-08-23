import Vue from 'vue'
export default new Vue({
    methods: {
        addTarefa(text) {
            let tarefa = {
                text: text,
                status: false
            }
            this.$emit('addTarefa', tarefa)
        },
        onAddTarefa(callback) {
            this.$on('addTarefa', callback)
        },
        alterTarefa(index, status) {
            this.$emit('alterTarefa', index, status)
        },
        onAlterTarefa(callback) {
            this.$on('alterTarefa', callback)
        },
        deleteTarefa(index) {
            this.$emit('deleteTarefa', index)
        },
        onDeleteTarefa(callback) {
            this.$on('deleteTarefa', callback)
        }
    }
})