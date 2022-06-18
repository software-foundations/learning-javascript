const numbers = [1, 2, 3, 4, 5]

const sum10 = number => number + 10
const triple = number => number * 3
const toMoney = num => `R$ ${parseFloat(num).toFixed(2)}`.replace('.', ',')

let result = numbers.map(sum10).map(triple).map(toMoney)

// [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
console.log(result)

// [1, 2, 3, 4, 5]
console.log(numbers)