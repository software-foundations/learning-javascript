# Array

- In fact, an array is an object
- There is no native array in javascript
- It can have heterogeneous values
- It is not fixed in size
- It is indexed by zero
- <code>arrObj.length</code> return the number of items in the array
- <code>arrObj.sort()</code> both sort and modifies the array
- <code>delete arrObj[index]</code> put <code>undefined</code> at index position
- <code>arrObj.splice()</code> adds or remove (or both at the same time) an item in an specific index
- <code>const arr = []</code> makes the reference, but not its value, constant

# Important Methods

- <code>pop()<code/> removes the last item of the array
- <code>push(item)<code/> adds item to the end of the array
- <code>shift()<code/> removes the first item of the array
- <code>unshift(item)<code/> adds item to the beginning of the array
- <code>slice(startIndex, numberItems)<code/> slice and return a new array

# Simulating array with object

- No new concepts presented


# For Each

- Is a way to iterate over an array

- It is recommend use other methods, like reduce, with more proposal then it

- <code>arr.forEach(element, index, array)</code>

- Where <code>array === myArray</code>

# Implementing our own forEach

- Way 01: to all array objects
```javascript
Array.prototype.forEach2 = function (callback) {
	for (let i = 0; i < this.length; i ++) {
		callback(this[i], i, this)
	}
}
```

- Way 02: to a specific array object
```javascript
let forEach2 = {
	enumerable: false,
	writable: false,
	value: function (callback) {
		for (let i = 0; i < this.length; i ++) {
			const element = this[i]
			const index = i
			const array = this

			callback(element, index, array)
		}
	}
}

const people = ['Bruno', 'Tom', 'Morgan']

Object.defineProperty(people,'forEach2',forEach2)
```

# Map

- Generate a new array
- It maps the array from another one
- The new array has the same size
- The new array might has its data transformed
- <code>arrObj.map((value, index, array)=>{})</code>

# Filter

- Filter an array by some criteria
- Result in a subarray
```javascript
arrObj.filter( function(elem, index, array, thisArg) { return boolean })
```

# Reduce

- The parameter is processed and then passed to the next iteration
- Then, we have the accumulator and the current item
- It makes a <code>for</code> loop internally
- <code>initialValue</code> is optional

```javascript
arrObj.filter( function(accumulator, current, index, array){...}, initialValue)
```

# Imperative vs Declarative

- Declarative is

1. More reusable
2. More readable
3. 'why' is more important than 'how' something is done
