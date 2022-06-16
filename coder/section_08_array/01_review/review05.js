let arr = ['a', 'b', 'c', 'd']
let index = 1
let numItemsToRemoveFromIndex = 2
let itemsToAppendAfterRemoval = ['x', 'y', 'z']

arr.splice(
	index,
	numItemsToRemoveFromIndex,
	...itemsToAppendAfterRemoval
)

// ['a', 'x', 'y', 'z', 'd']
console.log(arr)