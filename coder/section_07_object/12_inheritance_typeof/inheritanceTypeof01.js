function printTypeOf(content)
{
	console.log(typeof content)
}

// Functions
// Then, they have .prototype attribute
printTypeOf(String)
printTypeOf(Array)
printTypeOf(Object)
printTypeOf(Function)

// reverse function is not in default api
// but we can set it
String.prototype.reverse = function () {
	const stringArray = this.split('')
	const reversedStringArray = stringArray.reverse()
	const joinedArray = reversedStringArray.join('')	
	return `${joinedArray}`
}

console.log('cod3r school'.reverse())

Array.prototype.getFirstElement = function () {
	return this[0]
}

console.log([1, 2, 3, 4, 5].getFirstElement())
console.log(['a', 'b', 'c', 'd', 'e'])

// YOU MUSTN'T DO THAT IN ANYWAY
// NEVER OVERRIDE BUILT IN PROTOTYPE FUNCTIONS
// IT CAN PROMOTE SIDE EFFECTS

String.prototype.toString = function () {
	return 'Chipped everything'
}

console.log('Bruno'.reverse())
