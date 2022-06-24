let students = [
	{ name: 'John', grade: 7.3, scholarship: false },
	{ name: 'Mary', grade: 9.2, scholarship: true },
	{ name: 'Peter', grade: 9.8, scholarship: false },
	{ name: 'Mary', grade: 8.7, scholarship: true }
]

let initialValue = 10

let result = students.map(s => s.grade).reduce(
	function (accumulator, current, index, array) {
		console.log(`index: ${index} |--| accumulator: ${accumulator} |--| current: ${current}`)
		return accumulator + current
	},
	initialValue
)

console.log(result)

initialValue = 0

result = students.map(s => s.grade).reduce(
	function (accumulator, current, index, array) {
		console.log(`index: ${index} |--| accumulator: ${accumulator} |--| current: ${current}`)
		return accumulator + current
	},
	initialValue
)

console.log(result)