const arrGrades = [
	7.7,
	6.5,
	5.2,
	8.9,
	3.6,
	7.1,
	9.0
]

// extract grades < 7
// without callback
let arrlowGrades = []

for (let i in arrGrades) {

	if (arrGrades[i] < 7)
	{
		arrlowGrades.push(arrGrades[i])
	}
}

// [ 6.5, 5.2, 3.6 ]
console.log(arrlowGrades)

// extract grades < 7
// with callback

let arrLowGradesUsingCallback01 = arrGrades.filter((grade) => grade < 7)

let arrLowGradesUsingCallback02 = arrGrades.filter(
	function (grade)
	{
		return grade < 7
	}
)

let arrLowGradesUsingCallback03 = arrGrades.filter(
	function getGradeLessThan7(grade)
	{
		return grade < 7
	}
)

const getGradeLessThan7 = (grade) => grade < 7

arrLowGradesUsingCallback04 = arrGrades.filter(getGradeLessThan7)

console.log(arrLowGradesUsingCallback01)
console.log(arrLowGradesUsingCallback02)
console.log(arrLowGradesUsingCallback03)
console.log(arrLowGradesUsingCallback04)
