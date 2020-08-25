<template>
    <div id="card">
        <v-card
            class="mx-auto"
            max-width="344">
            <v-card-title>{{ stock.text }}</v-card-title>
            <v-card-actions>
                <v-input type="text" v-model="stockAmount"></v-input>
                <v-btn text large :color="cardDetails.btn.color">Primary</v-btn>
                <v-btn @click="execute">{{ cardDetails.btn.text }}</v-btn>
            </v-card-actions>
        </v-card><v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large disabled>Disabled</v-btn>
      </div>
    </v-col>
    </div>
</template>

<script>
import { mapGetters, getActions } from 'vuex'

export default {
    props: {
        'stock': Object,
        'type': String
    },
    data() {
        return {
            stockAmount: 0,
            cardStock: {
                color: '',
                btn: {
                    color: 'primary',
                    text: 'Comprar'
                }     
            }, 
            cardPortfolio: {
                color: '',
                btn: {
                    color: '',
                    text: ''
                }     
            }
        }
    },
    computed: {
        cardDetails(){
            if (this.type == 'stock') {
                return this.cardStock
            } else if (this.type == 'portfolio') {
                return this.cardStock
            }
            return {}
        }
    },
    methods: {
        ...mapGetters({
            getStock: 'getStock',
            getPortfolio: 'getPortfolio'
        }),
        ...getActions({
            handleStock: 'handleStock'
        }),
        execute() {
            if (this.type == 'portfolio') {
               this.amount *= -1
            }
            stock.amount = this.amount
            handleStock(stock)
        }
    }
}
</script>

<style>

</style>
