const numbers = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const letters = ['a', 'b', 'c'];

// Way 01
const [list1, list2, list3] = numbers;
const [a, b, c] = letters;

console.log(list1, list2, list3);
console.log(a, b, c);

// way 02
const [firstList, ...othersLists] = numbers;
const [firsLetter, ...othersLetters] = letters;

console.log(firstList, othersLists);
console.log(firsLetter, othersLetters);

// way 03
const [varList1, , varList3] = numbers;
const [varA, , varC] = letters;

console.log(varList1, varList3);
console.log(varA, varC);

// way 04
const [onlyFirstList] = numbers;
const [onlyFirstLetter, onlySecondLetter] = letters;

console.log(onlyFirstList);
console.log(onlyFirstLetter);

// way 05
const onlyLastList = numbers[numbers.length - 1];

// both works fine
// const onlyLastLetter = letters.slice(-1)[0];
const onlyLastLetter = letters[letters.length - 1];

console.log('-----');
console.log(onlyLastList);
console.log(onlyLastLetter);
