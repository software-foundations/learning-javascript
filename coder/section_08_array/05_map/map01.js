const numbers = [1, 2, 3, 4, 5]

const result = numbers.map(function(number) {
	return number * 2
})
const newNumbers = numbers.map((number) => number)

// [ 2, 4, 6, 8, 10 ]
console.log(result)

// false
console.log(newNumbers === numbers)

// [1, 2, 3, 4, 5]

console.log(numbers)