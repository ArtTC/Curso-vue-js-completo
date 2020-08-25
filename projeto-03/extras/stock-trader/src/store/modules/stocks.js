export default {
    namespaced: true,
    state: {
        stocks: [
            { number: 0, text: 'Apple', price: 10 }
        ],
        userStocks: [
            { number: 0, text: 'Apple' }
        ]
    },
    getters: {
        getStocks(state) {
            return state.stocks
        },
        getPortfolio(state) {
            return state.userStocks
        }
    },
    mutations: {
        addStock(state, stock) {
            state.stocks.push(stock)
        },
        rmvStock(state, index) {
            state.stock.splice(index, 1)
        }
    },
    actions: {
        handleStock(state, handler) {
            let verifier = false
            let stock = stock
            state.userStocks.map((uStock, index) => {
                if (uStock.number == stock.number) {
                    state.userStocks.amount += stock.amount
                    if (state.userStocks.amount < 1) {
                        state.rmvStock(index)
                    }
                    verifier = true
                    break
                }
            })
            if (verifier && stock.amout > 0) {
                state.addStock(stock)
            }
        }
    }
}