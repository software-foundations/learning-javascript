Array.prototype.reduce2 = function(callback, initialValue) {
	let initialIndex = initialValue ? 0 : 1
	let accumulator = initialValue || this[0]

	for (let i = initialIndex; i < this.length; i ++) {
		accumulator = callback(accumulator, this[i], i, this)
	}

	return accumulator
}

const mySum = (total, value) => total + value

const numbers = [1, 2, 3, 4, 5, 6]

// 21
console.log(numbers.reduce2(mySum))
// 31
console.log(numbers.reduce2(mySum, 10))