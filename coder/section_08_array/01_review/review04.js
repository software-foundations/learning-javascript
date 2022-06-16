let arr = ['a', 'b', 'c', 'd']
let index = 1
let numItemsToRemoveFromIndex = 0

arr.splice(index, numItemsToRemoveFromIndex)
// [ 'a', 'b', 'c', 'd' ]
console.log(arr)

numItemsToRemoveFromIndex = 1
arr.splice(index, numItemsToRemoveFromIndex)
// [ 'a', 'c', 'd' ]
console.log(arr)

index = 0
numItemsToRemoveFromIndex = 2
arr.splice(index, numItemsToRemoveFromIndex)
// ['d']
console.log(arr)