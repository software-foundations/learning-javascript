const likeAnArrayObject = {
	0: 'Bruno',
	1: 'Tim',
	2: 'Sam'
}

// { '0': 'Bruno', '1': 'Tim', '2': 'Sam' }
console.log(likeAnArrayObject)

Object.defineProperty(likeAnArrayObject, 'toString', {
	value: function() { return Object.values(this)},
	enumerable: false
})

// [ 'Bruno', 'Tim', 'Sam' ]
console.log(likeAnArrayObject.toString())

// Bruno
console.log(likeAnArrayObject[0])
