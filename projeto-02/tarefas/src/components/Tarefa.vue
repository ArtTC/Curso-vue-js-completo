<template>
    <div class="t-children">
        <div class="tarefa" 
            :class="classTarefa" 
            @click="alterTarefa">
            <h2>{{ tarefa.text }}</h2>
        </div>
        <button class="excluirTarefa" @click="deleteTarefa">x</button> 
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: ['tarefa', 'index'],
    computed: {
        classTarefa() {
            return this.tarefa.status ? 'on' : 'off'
        }
    },
    methods: {
        alterTarefa() {
            let index = this.index
            let status = !this.tarefa.status
            barramento.alterTarefa(index, status)
        },
        deleteTarefa() {
            let index = this.index
            barramento.deleteTarefa(index)
        }
    }
}
</script>

<style>

    .t-children {
        width: 10rem;
        height: 5rem;
        margin: 2rem;
        float: left;
        position: relative;
        margin: 2rem;

    }

    .tarefa {
        width: 100%;
        height: 100%;
        /* border: 1px solid; */
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        border-left: 5px solid;
    }
    
    .on {
        border-color: greenyellow;
        background-color: #5efc03;
        text-decoration: line-through;
    }
    
    .off {
        border-color: pink;
        background-color: #f04872;
    }

    .excluirTarefa {
        position: absolute;
        top: 10%;
        right: 5%;
        border: 1px solid #ddd;
        border-radius: 100%;
        background-color: white;
        cursor: pointer;
    }

</style>