function area(weight, height)
{
	const area = weight * height

	if (area > 20)
	{
		console.log(`Too big area: ${area}`)
	}
	else
	{
		return area
	}

}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6))
console.log(area(5, 5))