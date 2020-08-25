<template>
    <div class="stocks">
        <DemoCard v-for="stock in stocks" :card="stock" :key="stock.number" :type="type" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DemoCard from '../assets/DemoCard'
export default {
    components: { DemoCard },
    prop: {
        'type': {
            default: 'stocks'
        }
    },
    computed: {
        ...mapGetters('stocks', {
            handleStock: 'handleStock'
        }),
        stocks() {
            if (this.type == 'stocks') {
                return this.$store.stocks.getStocks()
            } else if (this.type == 'portfolios') {
                return this.$store.stocks.getPortfolios()
            }
        },
        mainClass() {
            if (this.type == 'stocks') {
                return {}
            } else if (this.type == 'portfolios') {
                return {}
            }
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>

</style>
