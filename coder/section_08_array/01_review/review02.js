let people = new Array('Bruno', 'Paul')

console.log(typeof people, people)

console.log(people[0])
console.log(people[1])

// undefined
console.log(people[2])

people[2] = 'Allan'

// Allan
console.log(people[2])

people[4] = 'Sam'

// [ 'Bruno', 'Paul', 'Allan', <1 empty item>, 'Sam' ]
console.log(people)

people.push('Tim')

// [ 'Bruno', 'Paul', 'Allan', <1 empty item>, 'Sam', 'Tim']
console.log(people)

// true
console.log(people[3] === undefined)

// false
console.log(people[3] === undefined)

// 2
console.log(['x', 'y'].length)

// [ 'Allan', 'Bruno', 'Paul', 'Sam', 'Tim', <1 empty item> ]
// It alters the array itself
console.log(people.sort())