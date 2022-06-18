// Implementing map
// My implementation - matches the course implementation

Array.prototype.map2 = function(callback) {
	const newArray = []
	for (let i = 0; i < this.length; i ++) {
		let item = callback(this[i], i, this)
		newArray.push(item)
	}
	return newArray
}

const car = [
	'{ "name": "pencil", "price": 4}',
	'{ "name": "pen", "price": 5}',
	'{ "name": "eraser", "price": 2.25}',
	'{ "name": "ruler", "price": 1.75}'
]

// Return an array only with the prices

const extractPrice = item => item.price
const prices = car.map2(JSON.parse).map2(extractPrice)

// [ 4, 5, 2.25, 1.75 ]
console.log(prices)