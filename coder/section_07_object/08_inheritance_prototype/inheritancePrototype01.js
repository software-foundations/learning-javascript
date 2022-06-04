let ferrari = {
	model: 'F40',
	maxSpeed: 324
}

let volvo = {
	model: 'V40',
	maxSpeed: 200
}

// Here we can access who is the
// prototype of this object in the
// whole prototype hierarchy
console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// This is the root prototype in the
// prototype hierarchy
console.log(Object.prototype.__proto__ === null)

