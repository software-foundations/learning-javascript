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
