// 02 anonymous funciton expression
// In this case, we cannot use
// a function after its declaration
const plus2 = function (x, y)
{
	return x + y
}

// 03 named function expression - not widely used
// In this case, we cannot use
// a function after its declaration
const plus3 = function plus3 (x, y)
{
	return x + y
}

console.log(plus2(1, 2))

console.log(plus3(1, 2))