// Course implementation

Array.prototype.forEach2 = function (callback) {
	for (let i = 0; i < this.length; i ++) {
		callback(this[i], i, this)
	}
}

const people = ['Bruno', 'Tom', 'Morgan']

people.forEach2(function(element, index, array) {
	console.log(`-> ${index} : ${element}`)
})

console.log(people)
