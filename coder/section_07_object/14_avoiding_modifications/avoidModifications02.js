// Object.seal
// Preventing add and delete properties
// We can modify attributes

const person = {
	name: 'Bruno',
	age: '25'
}

Object.seal(person)

console.log('isSealed: ', Object.isSealed(person))

person.hasChildren = true

delete person.name

console.log(person)

person.name = 'Conde'

console.log(person)