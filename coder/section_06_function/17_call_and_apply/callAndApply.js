function getPrice(tax = 0, coin = "R$")
{
	return `${coin} ${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
	name: "Notebook",
	price: 10000,
	discount: 0.5,
	getPrice
}

global.price = 20

global.discount = 0.1

// 18
console.log(getPrice())

// 5000
console.log(product.getPrice())

const car = {	
	price: 1000,
	discount: 0.3	
}

// 18
// because the first parameter is the context
// the other parameters are the parameters
console.log(getPrice.call())

// 700
console.log(getPrice.call(car))

// 18
console.log(getPrice.apply())

// 700
console.log(getPrice.apply(car))

// difference between call and apply

// 700
// here we passa the parameters directly
console.log(getPrice.call(car, 1000, '$'))

// 18018
console.log(getPrice.call(global, 1000, '$'))

// here we passa the parameters inside an array
// 18018
console.log(getPrice.apply(car, [100, '$']))

// 18018
console.log(getPrice.apply(global, [1000, '$']))