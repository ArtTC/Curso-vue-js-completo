<template>
    <div class="stocks">
        <DemoCard v-for="stock in stocks" :stock="stock" :key="stock.number" :type="type" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DemoCard from './DemoCard'
export default {
    components: { DemoCard },
    props: {
        'type': {
            default: 'stocks'
        }
    },
    computed: {
        stocks() {
            console.log(this.type)
            if (this.type == 'stocks') {
                return this.getStocks()
            } else if (this.type == 'portfolio') {
                return this.getPortfolio()
            }
        },
        mainClass() {
            if (this.type == 'stocks') {
                return {}
            } else if (this.type == 'portfolio') {
                return {}
            }
        }
    },
    methods: {
        ...mapGetters('stocks', {
            getStocks: 'getStocks',
            getPortfolio: 'getPortfolio'
        }),
    }
}
</script>

<style>

.stocks {
    wtypeth: 100%;
    padding: 2rem;
}

</style>
