<template>
    <div class="home">
        <span class="title">Negocie e Consulte suas Ações</span>

        <hr>
        <strong>Seu Saldo: {{ balance | dinheiro }}</strong>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('balance', {
            balance: 'getValue'
        })
    }
}
</script>

<style>

.title {
    font-size: 24pt;
}

</style>
