
new Vue({
    el: '#desafio',
    data: {
        nome: 'Arthur Terra Chaves',
        idade: 18,
        srcImg: 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'
    },
    methods: {
        calcIdade() {
            return this.idade * 3;
        },
        returnRandom() {
            return Math.random();
        }
    }
});