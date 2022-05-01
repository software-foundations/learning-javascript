function Person()
{
	this.age = 0

	setInterval(() => {
		this.age++
		console.log(this.age)
	},
	1000)
}

new Person
// 1
// 2
// Oberver that arrow function
// doesn't change the 'this' reference
