let double = function(x)
{
	return 2 * x
}

arrowDouble = (x) => {
	return 2 * x
}

// implicit return
arrowDoublev2 = x => 2 * x

console.log(double(5))
console.log(arrowDouble(6))
console.log(arrowDoublev2(Math.PI))