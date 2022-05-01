const plus = function(x, y)
{
	return x + y
}

const less = function(x, y)
{
	return x - y
}

const printResult = function(a, b, operation = plus)
{
	console.log(operation(a, b))
}

printResult(3, 4)					// 7

printResult(3, 4, plus)				// 7

printResult(3, 4, less)				// -1

printResult(3, 4, function (x, y)	// -1
{
	return x - y
})

printResult(3, 4, (x, y) => x * y) // 12