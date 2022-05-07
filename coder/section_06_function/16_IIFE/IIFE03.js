// you can delliberated acces the global scope

(() => {	
	console.log(this)

	this.person = 'bruno'
})()

console.log('this person is ', this.person)

console.log(this)