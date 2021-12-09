/*
FALSY
false itself
- 0
- ""
- ''
- ``
- null
- undefined
- NaN

TRUE: anything else different from FALSY
------

&& -> return the first false value found, if false sentence
&& -> return the last true value found, if true sentence

|| -> return the first true value found, if true sentence
|| -> return the last false value found, if false sentence
*/



console.log('Bruno' && 0 && 'Conde' && "") // 0
console.log('Bruno' && "" && 'Conde') // ""
console.log('Bruno' && undefined && 'Conde') // undefined
console.log('Bruno' && null && 'Conde') // null

console.log('\n')
console.log('Bruno' && 1 && 'Conde') // 'Conde'
console.log('Bruno' && 1 && 'Conde' && 'ok') // 'ok'
console.log('Bruno' && false && 'Conde')

console.log('-------------')


console.log("a" && "b")

// ||

console.log('-------------')

console.log('Bruno' || 0 || 'Conde' || "") // 0
console.log('Bruno' || "" || 'Conde') // ""
console.log('Bruno' || undefined || 'Conde') // undefined
console.log('Bruno' || null || 'Conde') // null

console.log('\n')
console.log('Bruno' || 1 || 'Conde') // 'Conde'
console.log('Bruno' || 1 || 'Conde' && 'ok') // 'ok'
console.log('Bruno' || false || 'Conde')

console.log('----------')
console.log("" || false || undefined )
