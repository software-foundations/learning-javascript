// My implementation

let forEach2 = {
	enumerable: false,
	writable: false,
	value: function (callback) {
		for (let i = 0; i < this.length; i ++) {
			const element = this[i]
			const index = i
			const array = this

			callback(element, index, array)
		}
	}
}

const people = ['Bruno', 'Tom', 'Morgan']

Object.defineProperty(people,'forEach2',forEach2)

people.forEach2(function(element, index, array) {
	console.log(`-> ${index} : ${element}`)
})