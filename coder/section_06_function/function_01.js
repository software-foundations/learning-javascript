// Creating a funciton in a literal way

function fun1() { }

// Storaging a function in a variable

const fun2 = function () {}

// Storaging a function inside an array

const array = [
	function (a, b) { return a + b },
	fun1,
	fun2
]

console.log(array[0](2, 3))

// Storaging in a atribute of an object

const obj = {}

obj.speak = function () { return 'Hello'}

console.log(obj.speak())

// Passing funciton as a parameter

function run(argument)
{
	argument()
}

run(function () { console.log('Hi')})

// A function can return another
// A function can contain another

function plus(a, b)
{
	return function (c)
	{
		console.log(a + b + c)
	}
}

plus(2, 3)(4)

let fivePlus = plus(2, 3)

fivePlus(4)

