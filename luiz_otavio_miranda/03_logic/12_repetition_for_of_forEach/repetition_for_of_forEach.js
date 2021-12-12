const person = {
	name: 'Bruno',
	lastName: 'Conde',
};

const arr = [100, 200, 300, 400];

/*
-> classic for
generally with arrays or strings

-> for in <array || string || object>
iterate over indexs

-> for of <array || string>
iterate over values

-> <array || string>.forEach
*/

for (let value of arr) {
	console.log(value);
}

arr.forEach(function (value, index, array) {
	console.log(value, index, array);
});

arr.forEach(function (value) {
	console.log(value);
});

arr.forEach(function (_, index) {
	console.log(index);
});

arr.forEach(function (_, _, array) {
	console.log(array);
});

arr.forEach(
	(callbackfn = (value) => {
		console.log(value);
	})
);

arr.forEach((value) => {
	console.log(value);
});

arr.forEach((v, i, a) => {
	console.log(v, i, a);
});
