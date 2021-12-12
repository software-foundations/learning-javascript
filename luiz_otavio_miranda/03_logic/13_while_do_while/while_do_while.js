console.log('---fase---');

console.log(-1 == true);
console.log(0 == true);
console.log(0.1 == true);
console.log(1.1 == true);
console.log(2 == true);
console.log('' == true);
console.log(1 === true);
console.log('1' === true);

console.log('\n---true---');

console.log(1 == true);
console.log('1' == true);

// while evaluation first
function loopWhile(val) {
	console.log(`loopWhile(${val})`);
	while (val != true) {
		console.log(val);
		val += 1;
	}
}

// do before while evaluation
function loopDoWhile(val) {
	console.log(`loopDoWhile(${val})`);
	do {
		console.log(val);
		val += 1;
	} while (val != true);
}

let value = 0;
let value2 = -1;

loopWhile(value);
loopDoWhile(value);
loopWhile(value2);
loopDoWhile(value2);

function while2(val) {
	console.log(`while2(${val})`);

	while (val <= 0) {
		console.log(val);
		val++;
	}
}

function doWhile2(val) {
	console.log(`doWhile2(${val})`);

	do {
		console.log(val);
		val++;
	} while (val <= 0);
}

while2(0);
doWhile2(0);
while2(1);
doWhile2(1);
