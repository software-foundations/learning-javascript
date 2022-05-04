// this.name might be undefined in browser

class Person
{
	constructor(name) {
		this.name = name
	}

	speak()
	{
		console.log(`Hello! My name is ${this.name} `)
	}
}

const person1 = new Person('Bruno')

person1.speak()