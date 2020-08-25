<template>
    <div class="stocks">
        <DemoCard v-for="stock in stocks" :stock="stock" :key="stock.number" type="portfolio" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DemoCard from '../assets/DemoCard'
export default {
    components: { DemoCard },
    computed: {
        stocks() {
            return this.getPortfolio()
        }
    },
    methods: {
        ...mapGetters('stocks', {
            getPortfolio: 'getPortfolio'
        }),
    }
}
</script>

<style>

.stocks {
    width: 100%;
    padding: 2rem;
}

</style>
