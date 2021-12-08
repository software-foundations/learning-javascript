console.log((100 / 0)) // Infinity
console.log(!(100 / 0)) // false
console.log(!!(100 / 0)) // true

let num1 = 1.1123
let num2 = 1.9123
console.log('\n\nfloor')
console.log(Math.floor(num1))
console.log(Math.floor(num2))
console.log('\n\nround')
console.log(Math.round(num1))
console.log(Math.round(num2))
console.log('\n\nmax')
console.log(Math.max(num1, num2))
console.log(Math.max(...[num2, num2]))
console.log('\n\nmin')
console.log(Math.min(num2, num2))
console.log(Math.min(...[num2, num2]))
console.log('\n\nrandom')
console.log(Math.random())