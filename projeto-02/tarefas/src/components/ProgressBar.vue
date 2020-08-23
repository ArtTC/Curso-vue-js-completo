<template>
    <div class="bar">
        <div class="progress-bar" :style="{ width }">
        </div>
        <label class="percentage">{{ width }}</label>
    </div>
</template>

<script>
export default {
    props: ['tarefas'],
    computed: {
        width() {
            const total = this.tarefas.length 
            const done = this.tarefas.filter(t => t.status).length
            var width = parseInt(done / total * 100) || 0
            return `${width}%`
        }
    }
}
</script>

<style>

    .bar {
        position: relative;
        width: 80%;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 1.5rem;
        border-radius: 4px;
        margin: 1rem;
    }

    .progress-bar {
        position: absolute;
        height: 100%;
        background-color: greenyellow;
        border-radius: 4px;
        align-self: left;
    }

    .percentage {
        position: absolute;
        top: 0.25rem;
    }

</style>