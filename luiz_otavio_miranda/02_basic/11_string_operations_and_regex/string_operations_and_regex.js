let myString = "#My String# Variable to test 1"

console.log("charAt(1)\t\t\t",      myString.charAt(1)); // position
console.log("charCodeAt(1)\t\t",    myString.charCodeAt(1)); // ascii
console.log("concat(' H', 'I')\t",  myString.concat(' H', 'I')); // concat

console.log("indexOf('M')\t\t",     myString.indexOf('M'))
console.log("indexOf('#')\t\t",     myString.indexOf('#')) // first occurence

console.log("indexOf('#', 0)\t\t",  myString.indexOf('#', 0)) // first
console.log("indexOf('#', -1)\t",   myString.indexOf('#', -1)) // first
console.log("indexOf('#', -2)\t",   myString.indexOf('#', -2)) // first
console.log("indexOf('#', 1)\t\t",  myString.indexOf('#', 1)) // second
console.log("indexOf('#', 2)\t\t",  myString.indexOf('#', 2)) // trhird 
// console.log('', myString.indexOf('g'))
// console.log('', myString.indexOf('My String'))
// console.log('', myString.indexOf('y String'))

console.log("lastIndexOf('#')\t",   myString.lastIndexOf('#')) // last
console.log("lastIndexOf('!')\t",   myString.lastIndexOf('!')) //-1 (not found)
console.log("lastIndexOf('#')\t",   myString.lastIndexOf
(
    searchValue='#',
    fromIndex=myString.length)
) // fromIndex 'value' means that 'value' position will be the 0 pos to search

// /g means global

// without spaces, numbers, symbols
console.log("match(/[A-Za-z]+/g)\t", myString.match(/[A-Za-z]+/g))

// return the index of first occurence
console.log("search(/[a-z]+/g)\t", myString.search(/[a-z]+/g))

// /e refers to 'e'
// /g refers to global
console.log("replace(/e/g, '3')\t", myString.replace(/e/g, '3'));

console.log("slice(-3, -1)\t\t", myString.slice(-6, -1));
console.log("split(' ', 2)\t\t", myString.split(' ', 2)); // take 2 occurences
console.log("toUpperCase()\t\t", myString.toUpperCase());
console.log("toLowerCase()\t\t", myString.toLowerCase());