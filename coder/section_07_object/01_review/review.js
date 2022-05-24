const obj = new Object
obj.a = 'A'
obj['b'] = 'B'
obj['c'] = 'C'

delete obj.a
delete obj.b

console.log(obj)

const car = {
	model: 'A4',
	value: 1291,
	owner: {
		name: 'Bruno',
		address: {
			street: 'street address',
			number: 123
		}
	},

	drivers: [{
		name: 'Allan',
		age: 25
	},
	{
		name: 'Anna',
		age: 30
	}],

	calculateInsurance: function ()
	{
		// ...
	}
}

console.log(car)

car.owner.address.number = 1000

console.log(car)

car["owner"]["address"]["number"] = 2000

console.log(car)

delete car.drivers

// undefined
console.log(car.drivers)

// TypeError: Cannot read properties of undefined (reading 'length')
// console.log(car.drivers.length)