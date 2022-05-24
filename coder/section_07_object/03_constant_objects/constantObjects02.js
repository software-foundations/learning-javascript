// Turns the memory address to the object constant
const person = {'name': 'Bruno'}

// Turns object immutable (constant)
Object.freeze(person)

// Will have no effect
// But will not raise error
person.name = ''
person.age = 25
delete person.name

console.log(person)

// Freezing object at its creation
const person2 = Object.freeze({'name': 'Bruno'})

console.log(person2)