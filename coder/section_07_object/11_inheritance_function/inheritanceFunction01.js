function printLine()
{
	console.log('-------------')
}

function MyObject() {}

console.log( MyObject.prototype )

printLine()

const obj1 = new MyObject
const obj2 = new MyObject

console.log(obj1.__proto__)
console.log(obj2.__proto__)
console.log(obj1.__proto__ === obj2.__proto__)

printLine()

console.log(MyObject.prototype)
console.log(MyObject.prototype === obj1.__proto__)

printLine()

MyObject.prototype.name = 'Anonym'

MyObject.prototype.speak = function()
{
	console.log(`Hi! My name is ${this.name}`)
}

obj1.speak()

obj2.name = 'Obj2 name'

obj2.speak()

const obj3 = {}

console.log(MyObject.prototype)

obj3.__proto__ = MyObject.prototype

obj3.name = 'Obj3 name'

obj3.speak()

printLine()
printLine()
printLine()

// Resuming

console.log(new MyObject)
console.log((new MyObject).__proto__)
console.log((new MyObject).__proto__ === MyObject.prototype)

printLine()

console.log(MyObject.__proto__)
console.log(MyObject.__proto__ === Function.prototype)

printLine()

console.log(Function.prototype)
console.log(Function.prototype.__proto__)
console.log(Function.prototype.__proto__ === Object.prototype)

printLine()

console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__ === undefined)