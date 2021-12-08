/*
Primitive (imutable) - string, number, boolean, undefined

null (bigint, symbol) - Compiled values

By reference (mutable) - array, object, function
*/

const a = {
    name: 'Bruno',
    lastName: 'Conde'
}

const b = a // b points to a

console.log(a)

console.log(b)

b.name = 'John'

console.log(a)

console.log(b)