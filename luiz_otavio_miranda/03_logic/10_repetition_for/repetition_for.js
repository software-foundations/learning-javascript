// way 01
for (let i = 0; i <= 3; i++) {
	console.log(i);
}

// way 02
for (let i = 10; i <= 30; i += 10) {
	console.log(i);
}

// way 03
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// way 04
for (let i = 30; i >= 10; i -= 10) {
	console.log(i);
}

// way 05 - over an array items
let myArray = [1, 'ball', { key: 'value' }];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}
