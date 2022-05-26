const person = {
	name: 'Bruno',
	age: 2,
	weight: 55
}

const destinationObject = {
	a: 1,
	b: 2,
	d: 4,
}

const toMergeObject01 = {
	b: 'Bruno'
}

const toMergeObject02 = {
	c: 'c'
}

let newObject = Object.assign(
	destinationObject,
	toMergeObject01,
	toMergeObject02
)

console.log(destinationObject)

console.log(newObject)

Object.freeze(newObject)

newObject.a = 'Conde'

console.log(newObject)