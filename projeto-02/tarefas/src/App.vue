<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :tarefas="tarefas"/>
        <input v-model="txtAdd" class="txtAdd" type="text" @keyup.enter="addTarefa">
		<ListaTarefas :tarefas="tarefas"/>
	</div>
</template>

<script>
import barramento from '@/barramento'
import ListaTarefas from './components/ListaTarefas'
import ProgressBar from './components/ProgressBar'

export default {
	components: {
		ListaTarefas, ProgressBar
    },
    data() {
        return {
            tarefas: [
                {
                    text: 'Tarefa',
					status: true
                }
            ],
			txtAdd: ''
        }
	},
	watch: {
		tarefas: {
			// deep - Verifica qualquer mudança no array;
			deep: true,
			handler() {
				localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
			}
		}
	},
    methods: {
        addTarefa(event) {
			let text = event.target.value;
			const sameName = t => t.text === text
			const reallyNey = this.tarefas.filter(sameName).length == 0
			if (!reallyNey) return
            barramento.addTarefa(text)
        }
	},
	created() {
		const json = localStorage.getItem('tarefas')
		this.tarefas = JSON.parse(json) || []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.txtAdd {
		width: 20rem;
		height: 2.5rem;
		border-radius: 5px;
		border: 2.5px solid #ddd;
		padding-left: 10px;
	}
</style>
