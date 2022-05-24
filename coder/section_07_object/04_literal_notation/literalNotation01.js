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