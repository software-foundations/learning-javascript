let people = ["Bruno", "Marie", "John"]

console.log(people)

console.log(typeof people)

people = 123

console.log(typeof people)
console.log(people instanceof Array)

// Operations
// push(any) -> adds at the end
// slice(index: int, index: int)
// <arr>[index: int]
// delete <arr>[index: int]
// pop() -> remove the last, and return it
// shift() -> remove the first, and return it
// unshift(any) -> adds at the beggin
// arr[arr.length] = ant -> adds at the end

people = ["Bruno", "Marie", "John"]

people.push('Luis')

console.log(people)

console.log(people.slice(0, -2))

console.log(people[50]) // undefined

const removedPop = people.pop()

console.log(removedPop)

console.log(people)

delete people[1]

console.log(people)

console.log(people[1])

const removed = people.shift()

console.log('->', removed)

console.log(people)

console.log(people.unshift('Begin'))

console.log(people)

people[people.length] = 'End'

console.log(people)

people[1] = 'item' // override <1 empty item>

console.log(people)

// create position (and missing others) and adds
people[10] = 'new'

console.log(people)
