new Vue({
	el: '#desafio',
	data: {
		teste: true,
		class01: 'destaque',
		class03: 'teste',
		class04: 'teste',
		txt04Bool: 'false',
		cor05: 'red',
		widthBarra: 0
	},
	computed: {
		class04Bool() {
			return this.txt04Bool == 'true' ? 'teste1' : '';
		},
		estilo05() {
			return {
				height: '20px',
				color: 'white',
			};
		},
		estilo06() {
			return {
				'width': `${this.widthBarra}px`,
				'background-color': 'blue',
				'height': '10px'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class01 = this.class01 == 'destaque' ? 'encolher' : 'destaque';
			});
		},
		iniciarProgresso() {
			const temporarizador = setInterval(() => {
				this.widthBarra++;
				console.log(this.widthBarra);
				if (this.widthBarra == 100) clearInterval(temporarizador); 
			}, 1000);
		}
	}
})
