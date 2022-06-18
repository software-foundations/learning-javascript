const car = [
	'{ "name": "pencil", "price": 4}',
	'{ "name": "pen", "price": 5}',
	'{ "name": "eraser", "price": 2.25}',
	'{ "name": "ruler", "price": 1.75}'
]

// Return an array only with the prices

const extractPrice = item => item.price
const prices = car.map(JSON.parse).map(extractPrice)

// [ 4, 5, 2.25, 1.75 ]
console.log(prices)