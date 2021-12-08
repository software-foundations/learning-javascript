let number1 = 0.7
let number2 = 0.1

console.log(number1)

number1 = Number(number1.toFixed(2))

console.log(number1)
console.log(number1.toFixed(2))

console.log(Number.isInteger(number1))

console.log(number1.toString())
console.log(number1.toString(2)) // number1 as binary

console.log(Number.isNaN(NaN))
console.log(Number.isNaN(1))
console.log(Number.isNaN("anything else"))
