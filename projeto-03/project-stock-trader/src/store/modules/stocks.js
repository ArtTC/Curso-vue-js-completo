export default {
    namespaced: true,
    state: {
        stocks: [
            { number: 0, text: 'Apple' },
            { number: 1, text: 'Google' },
            { number: 2, text: 'Microsoft' },
            { number: 3, text: 'Facebook' }
        ],
        stocksPrice: {
            '0':  10,
            '1':  10,
            '2':  10,
            '3':  100
        },
        userStocks: [
            { number: 0, text: 'Apple', amount: 10 }
        ]
    },
    getters: {
        getStocks(state) {
            state.stocks.map((stock, index) => {
                stock.price = state.stocksPrice[stock.number]
            })
            return state.stocks
        },
        getPortfolio(state) {
            state.userStocks.map((stock, index) => {
                stock.price = state.stocksPrice[stock.number]
            })
            return state.userStocks
        },
        getStockData(state) {
            return {
                stocks: state.stocks,
                stocksPrice: state.stocksPrice, 
                userStocks: state.userStocks
            }
        }
    },
    mutations: {
        addStock(state, stock) {
            state.stocks.push(stock)
        },
        rmvStock(state, index) {
            state.stocks.splice(index, 1)
        },
        addUserStock(state, stock) {
            state.userStocks.push(stock)
        },
        rmvUserStock(state, index) {
            state.userStocks.splice(index, 1)
        },
        setStockData(state, stockData) {
            state.stocks = stockData.stocks
            state.stocksPrice = stockData.stocksPrice
            state.userStocks = stockData.userStocks
        }
    },
    actions: {
        handleStock(state, stock) {
            let verifier = false
            console.log(stock)
            state.state.userStocks.map((uStock, index) => {
                if (uStock.number == stock.number) {
                    state.state.userStocks[index].amount += stock.amount
                    if (state.state.userStocks[index].amount < 1) {
                        state.commit('rmvUserStock', index)
                    }
                    verifier = true
                    return
                }
            })
            if (!verifier && stock.amount > 0) {
                state.commit('addUserStock', stock)
            }
        },
        randomizeStocksPrice(state) {
            state.state.stocks.map((stock, index) => {
                let price = state.state.stocksPrice[stock.number]
                let random = Math.random() * (-0.2, 0.2)
                price = price + price * random
                state.state.stocksPrice[stock.number] = price
            })
        }
    }
}