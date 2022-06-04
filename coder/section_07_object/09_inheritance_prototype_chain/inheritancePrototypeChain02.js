Object.prototype.attr0 = 'Z' // DO NOT DO THAT IN PRODUCTION

const grandFather = { attr1: "A" }

const father = {
	__proto__: grandFather,
	attr2: "B",
	attr3: "3" // shading by attr3 in child object
}

const child = {
	__proto__: father,
	attr3: "C"
}
console.log(child.attr3) // C
console.log(child.attr2) 
console.log(child.attr1)
console.log( '--------')
console.log(father.attr3) // 3
console.log(father.attr2)
console.log(father.attr1)