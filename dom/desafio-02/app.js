new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta');
        },
        ajustarValor(event) {
            let value = event.target.value;
            this.valor = value;
        }
    }
});