const people = ['Bruno', 'Tom', 'Morgan']

people.forEach(function(element) {
	console.log(`-> ${element}`)
})

console.log('-------------')

people.forEach(function(element, index) {
	console.log(`-> ${index} : ${element}`)
})

console.log('-------------')

people.forEach(function(element, index, array) {
	console.log(`-> ${index} : ${element}`)
	console.log(array)
})

console.log('-------------')

people.forEach( element => { console.log(element) })

console.log('-------------')

const showPerson = person => console.log(person)

people.forEach(showPerson)