# Object Review

- An object is a ket:valu pair
- An object can contain another object
- An object can contain an array
- An object can contain an function
- An undefined property, when accessed, returns undefined

# Object creation strategies

- Ways to create an object:

1. Constructor function
2. Factory function (Object)
3. Own Factory function
4. Object.create
5. JSON.parse (transform json into object)

- These methods above are relationed with booth object and functions

- Tip: don't confuse Literal object notation with JSON

# Constant Objects

- Why is possible alter Object data declared using const keyword ?

- Because using const turns constant the reference to the object

- To make the object constat, use Object.freeze(<object>)

# Literal Notation

```javascript
const a = 1
const b = 2
const c = 3

// Older way
const obj1 = {a: a, b: b, c: c}

// NewWay
const obj2 = {a, b, c}

// { a: 1, b: 2, c: 3 }
console.log(obj1)

// { a: 1, b: 2, c: 3 }
console.log(obj2)
```

```javascript
const key = 'grade'
const value = 912

const obj3 ={}

obj3[key] = value

console.log(obj3)
```

```javascript
const key = 'name'
const value = 'Bruno'

const obj4 = {[key]: value}

console.log(obj4)
```

```javascript
// Defining a function inside an object

const obj = {

	// Old way
	f1: function()
	{
		console.log('f1')
	},

	// new way
	f2()
	{
		console.log('f2')
	}
}

console.log(obj)
obj.f1()
obj.f2()
```