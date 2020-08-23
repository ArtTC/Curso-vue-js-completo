<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" :value="nome" @input="change('nome', $event)">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" :value="sobrenome" @keyup="change('sobrenome', $event)">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: { Rotulo },
    props: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        },
        change: Function
    }
}
</script>