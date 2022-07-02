const school = [{
	name: 'class m1',
	students: [{
		name: 'Bruno',
		grade: 8.1
	}, {
		name: 'Anne',
		grade: 9.3
	}]
}, {
	name: 'class m2',
	students: [{
		name: 'Rebeca',
		grade: 8.9
	}, {
		name: 'Robert',
		grade: 7.3
	}]
}]

const getGradeFromStudent = student => student.grade

const getGradesFromClasses = aClass => aClass.students.map(getGradeFromStudent)

const grades1 = [].concat(...school.map(getGradesFromClasses))

console.log(grades1)

Array.prototype.flatMap = function(callback) {
	return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getGradesFromClasses)

console.log(grades2)