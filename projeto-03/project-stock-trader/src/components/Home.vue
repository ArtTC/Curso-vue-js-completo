<template>
    <div class="home">
        <div class="title">Negocie e Consulte suas Ações</div>
        <v-alert :value="true" color="info" icon="info">Você pode Salvar & Carregar os Dados</v-alert>
        <v-alert :value="true" color="success" icon="info">Clique em 'Finalizar Dia' para iniciar um novo dia!</v-alert>
        <hr>
        <h1><strong>Seu Saldo: {{ balance | money }}</strong></h1>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('balance', {
            balance: 'getBalance'
        })
    }
}
</script>

<style>

    .title {
        font-size: 36pt !important;
        font-weight: 300;
        padding-bottom: 1rem;
    }

    hr {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

</style>
