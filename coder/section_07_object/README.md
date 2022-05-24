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
