// Transform object -> JSON
// function properties are not displayed to JSON
const obj = {
	a: 1,
	b: 2,
	c: 3,
	sum () { return this.a + this.b + this.c }
}

// {"a":1,"b":2,"c":3}
const json = JSON.stringify(obj) 
console.log(json)
// string
console.log(typeof json)
