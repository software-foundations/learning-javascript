function Person()
{
	this.age = 0

	const self = this

	setInterval(
		function () 
		{
			self.age ++
			console.log(self.age)
		},
		1000)
}

new Person
// 1
// 2
