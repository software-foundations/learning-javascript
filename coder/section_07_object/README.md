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

# Getters and Setters

- To get and set an attribute

- <uderline><attribute> is a convention to private attributes

```javascript
const sequency = {
	_value: 1,

	get value()
	{
		return this._value++
	},

	set value(value)
	{
		if (value > this._value)
		{
			this._value = value
		}
	}
}

// 1 2
console.log(sequency.value, sequency.value)

sequency.value = 1000

// 1000 1001
console.log(sequency.value, sequency.value)

sequency.value = 900

// 1002 1003
console.log(sequency.value, sequency.value)
```

# Important Object functions

- Object.keys
- Object.values
- Object.entries
- Object.defineProperty
- Object.assign
- Object.freeze

# Inheritance (Prototype)

- Make a class extands other class
- It improve reusability
- Choose composition instead of inheritance always you can
- The inheritance in js is based on Prototypes
- In a prototype, things will be searched from the inner prototype for the outer one

# Inheritance (Prototype chain)

- The name describe itself

- Atributes can be shading by child prototypes

# Inheritance (Impacting in loop through an object)

- Object.create(<fatherObject>)

- <object>.hasOwnProperty(<property>)

- Object.keys(<object>)

- for (key in <object>) {}

# Inheritance (function and prototype)

- When we create differents objects from the same constructor function, the objects has the same __proto__ property by default

# Inheritance (typeof)

- typeof String
- typeof Array
- typeof Object
- NEVER OVERRIDE BUILT IN PROTOTYPE FUNCTIONS