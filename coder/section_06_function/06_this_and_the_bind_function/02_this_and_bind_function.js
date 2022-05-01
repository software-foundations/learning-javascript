function Person()
{
	this.age = 0

	setInterval(
		function () 
		{
			this.age++
			console.log(this.age)
		},
		1000)
}

new Person
// NaN
