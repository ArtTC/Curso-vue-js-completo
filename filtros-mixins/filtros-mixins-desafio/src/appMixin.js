export default {
	computed: {
		computed3() {
			return this.teste1.split(' ').join(',')
		},
		computed4() {
			let value = this.teste2
			value = value.split(' ')
			for (var i = 0; i < value.length; i+=2) {
				value.splice(i + 1, 0, `(${value[i].length})`)
			}
			return value.join(' ')
		}
	},
}