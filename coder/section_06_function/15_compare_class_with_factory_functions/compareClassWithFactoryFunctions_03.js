// using a constructor function

function Person (name)
{
	this.name = name

	this.speak = function ()
	{
		console.log(`Hello! My name is ${this.name}`)
	}
}

const person03 = new Person('Bruno')

person03.speak()
