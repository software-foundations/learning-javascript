// My implementation

let students = [
	{ name: 'John', grade: 7.3, scholarship: false },
	{ name: 'Mary', grade: 9.2, scholarship: false },
	{ name: 'Peter', grade: 9.8, scholarship: true },
	{ name: 'Mary', grade: 8.7, scholarship: false }
]

// are all scholarship ?
const scholarship = (student) => student.scholarship

console.log(students.map(scholarship).reduce(
	function (accumulator, current) {
		return accumulator && current
	})
)

// is there any scholarship student ?
console.log(students.map(scholarship).reduce(
	function (accumulator, current) {
		return accumulator || current
	})
)