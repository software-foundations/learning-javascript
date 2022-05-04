// name is not undefined in browser
const createPerson = name => {
	return {
		speak: () => console.log(`Hello! My name is ${name}`)
	}
}

const person02 = createPerson('Bruno')

person02.speak()