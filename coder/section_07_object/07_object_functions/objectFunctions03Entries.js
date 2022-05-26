const person = {
	name: 'Bruno',
	age: 2,
	weight: 55
}

let entries = Object.entries(person)

console.log(entries)

entries.forEach(elem => {
	console.log(elem[0], elem[1])
})

entries.forEach((elem, index) => {
	console.log('index:', index, '->', elem[0], elem[1])
})

// destructuring
entries.forEach(([key, value]) => {
	console.log(key, ':', value)
})