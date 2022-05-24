// Don't confuse Literal object notation with JSON

// Way 01 - Using literal form
const obj = {}

console.log(obj)

// Way 02 - Using Object (constructor funciton)

// function
console.log(typeof Object)

// true
console.log(typeof new Object === 'object')
console.log(typeof new Object() === 'object')

const obj2 = new Object()

console.log(obj2)

// Way 03 - By our own constructor function
// remember that let and const are block scope
// this means public attribute

function Product(name, price, discount)
{
	this.name = name
	this.getPriceWithDiscount = () => {
		return price * (1 - discount)
	}
}

const product1 = new Product('Pen', 7.99, 0.15)

console.log(product1)
console.log(product1.name)
product1.name = 'Pencil'
console.log(product1.name)
console.log(product1.getPriceWithDiscount())

// Way 04 - Object.create

const person = Object.create(null)

console.log(person)

person.name = 'Bruno'

console.log(person)

// Way 05 - JSON.parse (transform json into object)
// JSON is text
const objFromJSON = JSON.parse('{"info": "I am JSON"}')

// { info: 'I am JSON' }
console.log(objFromJSON)

