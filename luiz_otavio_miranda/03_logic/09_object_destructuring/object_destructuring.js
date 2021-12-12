const person = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 35,
	address: {
		street: 'Central Avenue',
		number: 123,
	},
};

// way 01
const { name, lastName, ...rest } = person;

console.log(name, lastName);
console.log(rest);
console.log(rest.age);
console.log(rest.address);

// way 02
const { name: myName } = person;
console.log(myName);

// way 03
const { address } = person;
console.log(address);

// way 04
const {
	address: { street, number },
	address: fullAddress,
} = person;
console.log(street);
console.log(number);
console.log(fullAddress);

const {
	address: { street: s, number: n },
} = person;
console.log(s);
console.log(n);
