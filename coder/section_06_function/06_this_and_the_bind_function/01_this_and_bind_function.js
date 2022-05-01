// We can storage functions in objects

const person = {
	greeting: 'Good morning',
	speak() {
		console.log(this.greeting)
	}
}

person.speak()

const speak = person.speak
// conflict between functional and oo
speak() // undefined

// We solve this conflict using bind
// .bind makes this explicit points to an object
const speakFromPerson = person.speak.bind(person)

speakFromPerson()
