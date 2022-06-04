const father = {
	name: 'Tonny Stark',
	hairColor: 'black'
}

// Set father as prototype of child01
const child01 = Object.create(father)

child01.name = 'Morgan Stark'

console.log(child01.name)
console.log(child01.hairColor)
console.log(child01)

console.log('-----------')

const child02 = Object.create(father, {
	name: {
		value: 'Tom Holland',
		writable: 'false',
		enumerable: false
	}
})

console.log(child02.name)
child02.name = 'Spider man'
console.log(`${child02.name} has hair color ${child02.hairColor}`)

console.log(Object.keys(child01))
console.log(Object.keys(child02))

for (let key in child01)
{
	child01.hasOwnProperty(key) ?

		console.log('01: ', key) : console.log('01 by inheritane: ', key)
}

console.log('----------')

for (let key in child02)
{
	child02.hasOwnProperty(key) ?

		console.log('02: ', key) : console.log('02 by inheritane: ', key)
}
