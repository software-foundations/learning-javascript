// Implementing my own filter

Array.prototype.filter2 = function(callback, thisArg) {
	const newArray = []
	for (let i = 0; i < this.length; i ++) {
		if ( callback(this[i], i, this) ) {
			newArray.push(this[i])
		}
	}
	return newArray
}

const greatherThan2 = (number) => number > 2
let result = [1, 2, 3, 4, 5].filter2(greatherThan2)
console.log(result)
