const students = [
	{ name: 'John', grade: 7.9 },
	{ name: 'Mary', grade: 9.2 }
]

// CALCULATE MEAN GRADE

// Imperative approach

let total1 = 0

for (let i = 0; i < students.length; i ++) {
	total1 += students[i].grade
}

console.log(total1 / students.length)

// Declarative approach

const getGrade = student => student.grade
const sumGrades = (total, current) => total + current
const total2 = students.map(getGrade).reduce(sumGrades)
console.log(total2 / students.length)