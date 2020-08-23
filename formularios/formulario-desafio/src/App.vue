<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<Rotulo nome="Nome Completo">
					<input type="text" v-model="usuario.nomeCompleto">
				</Rotulo>
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<Rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="text" v-model="usuario.senha">
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados?">
					<Rotulo nome="Sim">
						<input type="radio" :value="true" v-model="armazenarDados">
					</Rotulo>
					<Rotulo nome="Não">
						<input type="radio" :value="false" v-model="armazenarDados">
					</Rotulo>
				</Rotulo>
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click.prevent="enviar">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<NomeCompleto v-model="nomeCompletoArr" />
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome Completo">
					<span>{{ usuario.nomeCompleto }}</span>
				</Rotulo>
				<Rotulo nome="Email">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span>{{ armazenarDados }}</span>
				</Rotulo>
				<Rotulo nome="Nome">
					<span>{{ nomeCompletoArr.nome }}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span>{{ nomeCompletoArr.sobrenome }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	methods: {
		enviar() {
			this.submetido = true
		},
        change(index, event) {
			let value = event.target.value
            this[index] = value
        }
	},
	data() {
		return {
			submetido: false,
			usuario: {
				nomeCompleto: '',
				email: '',
				senha: '',
			},
			nomeCompletoArr: {
				nome: '',
				sobrenome: '',
			},
			armazenarDados: true
		}
	},
	created() {
		this.$on('change-nome', value => {
			this.nome = value
		})
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
