new Vue({
    el: '#app',
    data: {
        jogo_on: false,
        logBatalha: [],
        widthJogador: 100,
        widthMonstro: 100,
        end: {},
        disable: false
    },
    computed: {
        bar_color_jogador() {
            return this.widthJogador > 20 ? 'green' : 'red';
        },
        bar_color_monstro() {
            return this.widthMonstro > 20 ? 'green' : 'red';
        }
    },
    methods: {
        comecar() {
            this.reset();
        },
        ataque(tipo) {
            if (this.disable) {
                return;
            }
            if (tipo == 1) {
                var value = this.generateRandomInteger(6, 9);
            } else {
                var value = this.generateRandomInteger(9, 12);
            }
            this.adicionarLog(`JOGADOR ATINGIU O MONSTRO COM ${value}.`, 'blue');
            if (this.widthMonstro < value) {
                this.widthMonstro = 0;
                this.endGame(0);
                return;
            } else {
                this.widthMonstro -= value;
            }
            this.ataqueMonstro();
        },
        ataqueMonstro() {
            if (this.disable) {
                return;
            }
            let value = this.generateRandomInteger(9, 13);
            this.adicionarLog(`MONSTRO ATINGIU O JOGADOR COM ${value}.`, 'red');
            if (this.widthJogador < value) {
                this.widthJogador = 0;
                this.endGame(1);
                return;
            } else {
                this.widthJogador -= value;
            }
        },
        curar() {
            if (this.disable) {
                return;
            }
            let value = this.generateRandomInteger(10, 15);
            this.adicionarLog(`JOGADOR CUROU ${value} DE VIDA.`, 'blue');
            if (100 < value) {
                this.widthJogador = 100;
            } else {
                this.widthJogador += value;
            }
            this.ataqueMonstro();
        },
        reset() {
            this.jogo_on = !this.jogo_on;
            this.logBatalha = [];
            this.widthJogador = 100;
            this.widthMonstro = 100;
            this.end = {};
            this.disable = false;
        },
        generateRandomInteger(min, max) {
            return Math.floor(min + Math.random()*(max + 1 - min))
        },
        adicionarLog(msg, color) {
            this.logBatalha.unshift({
                msg: msg,
                color: color
            });
        },
        endGame(end) {
            this.disable = true;
            if (end == 0) {
                alert('Parabéns você ganhou o jogo!');
                this.adicionarLog(`PARABÉNS VOCÊ GANHOU O JOGO!`, 'gray');
                this.end = {
                    msg: 'Parabéns você ganhou o jogo!',
                    color: 'green'
                };
            } else {
                alert('O monstro ganhou o jogo!');
                this.adicionarLog(`O MONSTRO GANHOU O JOGO!`, 'gray');
                this.end = {
                    msg: 'O monstro ganhou o jogo!',
                    color: 'red'
                };
            }
        }
    }
});
