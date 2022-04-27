// Strategy 01
// ||

function plus(a, b, c)
{
	a = a || 1

	b = b || 1

	c = c || 1

	return a + b + c
}

// Strategy 02, 03, and 04
// ternary operator ? with undefined
// check if it is in arguments object
// ternary operator ? with isNan

function plus2(a, b, c)
{
	a = a !== undefined ? a : 1
	b = b in arguments ? b : 1
	c = isNaN(c) ? 1 : c

	return a + b + c
}

// Strategy 05
// ECMAScript
function plus3(a = 1, b = 1, c = 1)
{
	return a + b + c
}

console.log('plus')
console.log(plus())
console.log(plus(2))
console.log(plus(0)) // remember 0 is a falsy value
console.log(plus2(1, 2, 3))
console.log(plus2(1, 2, 3))
console.log(plus2(0, 0, 0))

console.log('plus2')
console.log(plus2())
console.log(plus2(2))
console.log(plus2(0)) // 0 as falsy value isn't a problem in this using approach
console.log(plus2(1, 2, 3))
console.log(plus2(1, 2, 3))
console.log(plus2(0, 0, 0))

console.log('plus3')
console.log(plus3())
console.log(plus3(2))
console.log(plus3(0)) // 0 as falsy value isn't a problem in this using approach
console.log(plus3(1, 2, 3))
console.log(plus3(1, 2, 3))
console.log(plus3(0, 0, 0))