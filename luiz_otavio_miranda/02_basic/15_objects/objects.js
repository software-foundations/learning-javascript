const person = {
    name: 'Bruno',
    last: 'Conde',
    age: 25,

    speak() {
        console.log(`My age is ${this.age}`)
    },

    incrementAge() {
        this.age++
    }
}

person.speak()
person.incrementAge()
person.speak()
person.incrementAge()
person.speak()
person.incrementAge()
person.speak()