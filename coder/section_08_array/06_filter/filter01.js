const products = [
	{ name: 'Notebook', price: 2499, fragile: true },
	{ name: 'iPad Pro', price: 4199, fragile: true },
	{ name: 'glass cup', price: 12.49, fragile: true },
	{ name: 'plastic cup', price: 18.49, fragile: false }
]

console.log(products.filter((p) => p.price < 20))

console.log(products.filter(function (p) { return p.price < 20 } ))

console.log(products.filter(function (p) { return false } ))

console.log(products.filter(function (p) { return true } ))
