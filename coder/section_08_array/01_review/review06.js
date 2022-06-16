let arr = ['a', 'b', 'c', 'd']
let index = 1
let numItemsToRemoveFromIndex = 0
let itemsToAppendAfterRemoval = ['x', 'y', 'z']

arr.splice(
	index,
	numItemsToRemoveFromIndex,
	...itemsToAppendAfterRemoval
)

// ['a', 'x', 'y', 'z', 'b', 'd']
console.log(arr)