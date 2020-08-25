<template>
    <v-toolbar>
        <!-- <v-app-bar-nav-icon name="icon"></v-app-bar-nav-icon> -->

        <v-toolbar-title><strong>STOCK</strong>TRADER</v-toolbar-title>

    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn value="left" flat>
            <router-link tag="a" class="a_menu" value="left" to="/" exact>Home</router-link>
        </v-btn>
        <v-btn value="left" flat>
            <router-link tag="a" class="a_menu" value="left" to="/portfolio">Portifolio</router-link>
        </v-btn>
        <v-btn value="left" flat>
            <router-link tag="a" class="a_menu" value="left" to="/stocks">Ações</router-link>
        </v-btn>
    </v-toolbar-items>
        <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn style="float: right" @click="endDay()" flat>FINALIZAR DIA</v-btn>
        <!-- <v-btn style="float: right" flat>SALVAR & CARREGAR</v-btn> -->
        <v-btn style="float: right" @click="saveState" flat>SALVAR</v-btn>
        <v-btn style="float: right" @click="loadState" flat>CARREGAR</v-btn>
        <v-btn style="float: right" flat>SALDO: {{ balance | money }}</v-btn>
    </v-toolbar-items>
        <div class="text-xs-center">
    <v-menu>
      <template #activator="">
        <v-tooltip bottom>
          <template #activator="">
            <v-btn
              color="primary"
              dark
            >Dropdown w/ Tooltip</v-btn>
          </template>
          <span>Im A ToolTip</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-tile>
          <v-list-tile-title></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
    <!-- <v-card
        color="grey lighten-4"
        flat
        height="200px"
        tile
    >
    </v-card> -->
    <!-- <v-toolbar  activator="dark">
        <v-toolbar-title></v-toolbar-title> 
        <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
        >
        </v-btn-toggle>
    </v-toolbar> -->
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('balance', {
            balance: 'getBalance'
        }),
        ...mapGetters('stocks', {
            stockData: 'getStockData'
        })
    },
    methods: {
        ...mapMutations('balance', ['setBalance']),    
        ...mapActions('stocks', ['randomizeStocksPrice']),
        ...mapMutations('stocks', ['setStockData']),    
        endDay() {
            if (!confirm('Deseja finalizar o dia?')) {
                return
            }
            this.randomizeStocksPrice()
            console.log(this.$router)
            this.$router.push({ path: '/' })
        },
        saveState() {
            if (!confirm('Deseja salvar o estado atual?')) {
                return
            }
            this.$http.put('stocks.json', {
                balance: this.balance,
                stockData: this.stockData
            })
            return
        },
        loadState() {
            if (!confirm('Deseja sobreescrever o estado atual?')) {
                return
            }
            this.$http('stocks.json')
            .then(res => {
                res = res.data
                this.setBalance(res.balance),
                this.setStockData(res.stockData)
            })
            return
        }
    }
}
</script>

<style>
    .a_menu {
        text-decoration: none;
        color: gray;
    }
</style>
