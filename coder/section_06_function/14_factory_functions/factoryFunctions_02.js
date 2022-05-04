// a factory function with parameters

function createProduct(name, price)
{
	return {
		name,
		price,
		discount: 0.1
	}
}

// create one object
console.log(
	createProduct(
		'notebook',
		2000
	)
)

// create another object
console.log(
	createProduct(
		'playstation 5',
		5000
	)
)