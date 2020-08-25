<template>
    <div class="card">
        <v-card
            class="mx-auto"
            max-width="344">
            
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ stock.text }} - {{ stock.price | money }}</div>
            <span class="grey--text" v-if="stock.amount">{{ stock.amount }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
            <input solo v-model="stockAmount" type="number" min="1" :max="stock.amount"/>
            <v-btn flat :color="cardDetails.status ? cardDetails.btn.color : 'gray'" @click="execute">{{ cardDetails.btn.text }}</v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        'stock': Object,
        'type': String
    },
    watch: {
        stockAmount() {
            this.checkTxt()
        },
        balance() {
            this.checkTxt()
        }
    },
    computed: {
        ...mapGetters({
            getStock: 'getStock',
            getPortfolio: 'getPortfolio'
        }),
        ...mapGetters('balance', {
                balance: 'getBalance'
        }),
        cardDetails(){
            if (this.type == 'stocks') {
                return this.cardStock
            } else if (this.type == 'portfolio') {
                return this.cardPortfolio
            }
            return {}
        },
        stocksPrice() {
            return this.stock.price * this.stockAmount
        }
    },
    methods: {
        ...mapActions('balance', {
            handleBalance: 'handleBalance'
        }),
        ...mapActions('stocks', {
            handleStock: 'handleStock'
        }),
        execute() {
            if (!this.cardDetails.status) {
                return
            }
            let amount = parseInt(this.stockAmount);
            if (this.type == 'portfolio') {
               amount *= -1
            }
            console.log(amount)
            let stock = { 
                number: this.stock.number, 
                text: this.stock.text,
                amount: amount
            }
            this.handleStock(stock)
            this.handleBalance(this.stock.price * amount * -1)
            this.checkTxt()
        },
        checkTxt() {
            if (this.stockAmount < 1 || this.stockAmount > this.stock.amount) {
                this.stockAmount = 1
            }
            if (this.type == 'portfolio') {
                return
            }
            if (this.stocksPrice > this.balance) {
                this.cardDetails.status = false
            } else if (!this.cardDetails.status) {
                this.cardDetails.status = true
            }
        }
    },
    data() {
        return {
            stockAmount: 1,
            cardStock: {
                color: '',
                btn: {
                    color: 'blue',
                    text: 'Comprar'
                },
                status: true 
            }, 
            cardPortfolio: {
                color: '',
                btn: {
                    color: 'red',
                    text: 'Vender'
                },
                status: true     
            }
        }
    },
    created() {
        this.checkTxt()
    }
}
</script>

<style>

.card {
    float: left;
    min-width: 200px;
    margin: 2rem;
}

.card input[type="number"] {
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 5rem;
    cursor: text;
}

.card input[type="number"]:hover {
    cursor: pointer;
}

</style>
