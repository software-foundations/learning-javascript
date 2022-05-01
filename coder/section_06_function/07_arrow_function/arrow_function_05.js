/**
 * In arrow funcitons, 'this' points to
 * the module context where the arrow
 * function was placed in
*/

let arrowCompareWithThis = (param) =>
{
	console.log(this === param)
}

arrowCompareWithThis(global)			// false
arrowCompareWithThis(module.exports) 	// true
arrowCompareWithThis(this) 				// true

const obj = {}

arrowCompareWithThis = arrowCompareWithThis.bind(obj)

console.log('\n------------\n')

arrowCompareWithThis(global)			// false
arrowCompareWithThis(module.exports) 	// true
arrowCompareWithThis(this) 				// true