const arrManufactures = [
	"Mercedes",
	"Audi",
	"BMW"
]

// this assinature is the proper one
// which can be passed to a
// forEach loop

function print(name, index)
{
	console.log(`${index + 1}. ${name}`)
}

arrManufactures.forEach(print)

console.log('--------')

arrManufactures.forEach(
	function (manufacture)
	{
		console.log(manufacture)
	}
)

console.log('--------')

arrManufactures.forEach(
	(manufacture) =>
	{
		console.log(manufacture)
	}
)
console.log('--------')

arrManufactures.forEach(
	(manufacture) => console.log(manufacture)
)

console.log('--------')

arrManufactures.forEach(
	function (manufacture, index)
	{
		console.log(`${index + 1}. ${manufacture}`)
	}
)

console.log('--------')

arrManufactures.forEach(
	(manufacture, index) =>
	{
		console.log(`${index + 1}. ${manufacture}`)
	}
)