<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg"
					v-model="usuario.email"
					placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<!-- .prevent - evita o submit do formulário -->
			<b-button @click="salvar" 
				size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios"
				class="ml-2" size="lg" variant="success">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong>{{ usuario.nome }}<br>
				<strong>Email: </strong>{{ usuario.email }}<br>
				<strong>ID: </strong>{{ id }}<br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg"
					@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			usuarios: {},
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar())
		},
		salvar() {
			axios.post('https://curso-vue-e2d08.firebaseio.com/usuarios.json', this.usuario)
				.then(res => this.limpar())
		},
		obterUsuarios() {
			// this.$http ou this.$http.get
			axios('https://curso-vue-e2d08.firebaseio.com/usuarios.json').then(res => {
				this.usuarios = res.data
			})

			// Pode atribuir fora da instância global.
			// this.$http.defaults.headers.common['Authorization'] = 'abc123'
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria_maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
