// My implementation

let students = [
	{ name: 'John', grade: 7.3, scholarship: false },
	{ name: 'Mary', grade: 9.2, scholarship: false },
	{ name: 'Peter', grade: 9.8, scholarship: true },
	{ name: 'Mary', grade: 8.7, scholarship: false }
]

// are all scholarship ?
const allScholarship = (accumulator, current) => accumulator && current
console.log(students.map(s => s.scholarship).reduce(allScholarship))

// is there any scholarship student ?
const atLeastOneScholarship = (accumulator, current) => accumulator || current
console.log(students.map(s => s.scholarship).reduce(atLeastOneScholarship))
