// when using const to declare objects

// <object> -> <memory_address> -> {object content}

// object content can be modified

// object <memory_address> cannot

// person -> 123 -> {object content}
const person = {'name': 'Bruno'}

person.name = 'John'

console.log(person)

// person -> 456 -> {object content}
// TypeError: Assignment to constant variable.
// person = {'name': 'Anna'}
