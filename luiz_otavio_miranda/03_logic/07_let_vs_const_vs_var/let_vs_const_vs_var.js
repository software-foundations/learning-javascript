/*
let has block scope
const has block scope
var has function scope (and global scope)
*/

let varLet = 'bruno';
var varVar = 'conde';
var varConst = 'costa';

console.log('GLOBAL -> varLet -> ', varLet);
console.log('GLOBAL -> varVar -> ', varVar);
console.log('GLOBAL -> varConst -> ', varConst);

if (true) {
	console.log('\tIF');

	let varLet = 'BRUNO'; // creating
	var varVar = 'CONDE'; // redeclaring
	const varConst = 'COSTA'; // creating

	console.log('\tIF -> varLet -> ', varLet);
	console.log('\tIF -> varVar -> ', varVar);
	console.log('\tIF -> varConst -> ', varConst);
}

console.log('GLOBAL -> varLet -> ', varLet);
console.log('GLOBAL -> varVar -> ', varVar);
console.log('GLOBAL -> varConst -> ', varConst);

function myFunction() {
	console.log('\tFUNCTION');

	let varLet = 'BRUNO'; // creating
	var varVar = 'CONDE'; // redeclaring
	const varConst = 'COSTA'; // creating

	console.log('\tFUNCTION -> varLet -> ', varLet);
	console.log('\tFUNCTION -> varVar -> ', varVar);
	console.log('\tFUNCTION -> varConst -> ', varConst);
}

myFunction();

console.log('GLOBAL -> varLet -> ', varLet);
console.log('GLOBAL -> varVar -> ', varVar);
console.log('GLOBAL -> varConst -> ', varConst);
