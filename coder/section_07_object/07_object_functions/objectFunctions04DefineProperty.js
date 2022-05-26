const person = {
	name: 'Bruno',
	age: 2,
	weight: 55
}

let brithdayProperty = {
	enumerable: false, // do not appear in Object.keys, but remains acessable
	writable: false,
	value: '21/21/21'
}

Object.defineProperty(
	person,
	'birthday',
	brithdayProperty)

console.log(person)

person.brithday = '00/00/00'

console.log(person.birthday)

console.log(Object.keys(person))