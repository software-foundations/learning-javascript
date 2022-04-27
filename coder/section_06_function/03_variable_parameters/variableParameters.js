function plus()
{
	let amount = 0	

	for (i in arguments)
	{
		amount += arguments[i]
	}

	return amount
}

console.log(plus())
console.log(plus(1))
console.log(plus(2))
console.log(plus(3, 4))
console.log(plus(5, 'teste'))
console.log(plus('a', 'b', 'c'))