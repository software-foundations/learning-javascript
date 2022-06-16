const letters = ['a', 'b', 'c', 'd']

let startIncludedIndex = 1

let endNotIncludedIndex = 3

let chunk = undefined

// ['a', 'b', 'c', 'd']
chunk = letters.slice(startIncludedIndex)
console.log(chunk)

// ['b', 'c']
chunk = letters.slice(startIncludedIndex, endNotIncludedIndex)
console.log(chunk)
