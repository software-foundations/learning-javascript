// Object.preventExtensions
// We cannot add properties
// But we can modif properties
// But we can remove properties
const product = Object.preventExtensions({
	name: 'My name',
	price: 1.99,
	tag: 'onSale'
})

console.log('isExtensible: ', Object.isExtensible(product))

product.name = 'new Name'

console.log(product.name)

product.description = 'It is so cool'

// undefined
console.log(product.description)

// we can delete properties
delete product.tag
console.log(product.tag)