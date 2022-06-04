Object.prototype.attr0 = 'Z'

const grandFather = { attr1: "A" }

const father = {
	__proto__: grandFather,
	attr2: "B"
}

const child = {
	__proto__: father,
	attr3: "C"
}
console.log(child.attr3)
console.log(child.attr2)
console.log(child.attr1)

console.log(father.attr2)
console.log(father.attr1)

console.log(grandFather.attr1)

console.log(
	child.attr0,
	father.attr0,
	grandFather.attr0
)