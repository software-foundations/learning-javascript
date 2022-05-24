// Defining a function inside an object

const obj = {

	// Old way
	f1: function()
	{
		console.log('f1')
	},

	// new way
	f2()
	{
		console.log('f2')
	}
}

console.log(obj)
obj.f1()
obj.f2()