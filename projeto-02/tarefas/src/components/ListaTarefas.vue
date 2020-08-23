<template>
	<div>
        <div class="tarefas">
            <Tarefa
                v-for="(tarefa, index) in tarefas" 
                :key="index"
                :tarefa="tarefa"
                :index="index"/>
            <div class="divMsg" v-show="!tarefas.length">Sua vida está resolvida :)</div>
        </div>
	</div>
</template>

<script>
import barramento from '@/barramento'
import Tarefa from './Tarefa'

export default {
    props: ['tarefas'],
    components: {
        Tarefa
    },
    methods: {
    },
    created() {
        barramento.onAddTarefa(tarefa => {
            this.tarefas.push(tarefa)
        })
        barramento.onAlterTarefa((index, status) => {
            if (this.tarefas[index]) {
                this.tarefas[index].status = status
            }
            
        })
        barramento.onDeleteTarefa(index => {
            this.tarefas.splice(index, 1)
        })
    }
}
</script>

<style>

    .tarefas {
        width: 70rem;
        align-items: center;
    }

    .divMsg {
        text-align: center;
        margin: 1rem;
    }

</style>